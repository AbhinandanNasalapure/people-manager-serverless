import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import personService from "../services";
import updatePerson from "../dtos/updatePersonDto";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & updatePerson,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const personId: string = event.pathParameters.personId;
    const { body } = event;
    try {
      const person = await personService.updatePerson(personId, body);

      return formatJSONResponse(200, person);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
