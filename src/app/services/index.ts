import createDynamoDBClient from "../database/db";
import PersonService from "./personService";

const { PERSON_TABLE } = process.env;

const personService = new PersonService(createDynamoDBClient(), PERSON_TABLE);

export default personService;
