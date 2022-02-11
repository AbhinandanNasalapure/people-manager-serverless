import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Person from "../models/Person";

class PersonServie {
  constructor(
    private readonly dbClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getAllPeople(): Promise<Person[]> {
    const result = await this.dbClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Person[];
  }

  async getPerson(personId: string): Promise<Person> {
    const result = await this.dbClient
      .get({
        TableName: this.tableName,
        Key: { personId },
      })
      .promise();
 
    return result.Item as Person;
  }

  async createPerson(person: Person): Promise<Person> {
    await this.dbClient
      .put({
        TableName: this.tableName,
        Item: person,
      })
      .promise();
      try {
        const sqs = new AWS.SQS({
          endpoint: 'http://localhost:9324',
          region: 'eu-west-1'
        });
        
        await sqs.sendMessage({
            QueueUrl: 'http://localhost:9324/queue/person-queue',
            MessageBody:  JSON.stringify(person),
          })
          .promise();
      }
      catch(err) {
        console.error('SQS failed to send', {error: err});
      }
    return person;
  }

  async updatePerson(personId: string, partialPerson: Partial<Person>): Promise<Person> {
    const updated = await this.dbClient
      .update({
        TableName: this.tableName,
        Key: { personId },
        UpdateExpression:
          "set #firstName = :firstName, lastName = :lastName, address = :address, phoneNumber = :phoneNumber",
        ExpressionAttributeNames: {
          "#firstName": "firstName",
        },
        ExpressionAttributeValues: {
          ":firstName": partialPerson.firstName,
          ":lastName": partialPerson.lastName,
          ":address": partialPerson.address,
          ":phoneNumber": partialPerson.phoneNumber,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return updated.Attributes as Person;
  }

  async deletePerson(personId: string) {
    return this.dbClient
      .delete({
        TableName: this.tableName,
        Key: { personId },
      })
      .promise();
  }
}

export default PersonServie;
