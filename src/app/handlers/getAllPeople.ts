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
    try {
      const people = await personService.getAllPeople();

      return formatJSONResponse(200, people);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
