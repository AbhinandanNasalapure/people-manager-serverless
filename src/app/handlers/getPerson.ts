import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import personService from "../services";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const personId: string = event.pathParameters.personId;
    try {
      const person = await personService.getPerson(personId);

      return formatJSONResponse(200, person);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
