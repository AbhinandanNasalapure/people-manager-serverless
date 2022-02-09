import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import personService from "../services";
import createPerson from "../dtos/createPersonDto";
import generateUniqueId from "generate-unique-id"

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & createPerson,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const { personName, address, dateOfBirth } = event.body;

    try {
      const personId: string = generateUniqueId({
        length: 6,
        useLetters: false
      });
      const person = await personService.createPerson({
        personId,
        personName,
        address,
        dateOfBirth
      });

      return formatJSONResponse(201, person);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
