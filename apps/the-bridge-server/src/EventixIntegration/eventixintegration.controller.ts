import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventixIntegrationService } from "./eventixintegration.service";

@swagger.ApiTags("eventixIntegrations")
@common.Controller("eventixIntegrations")
export class EventixIntegrationController {
  constructor(protected readonly service: EventixIntegrationService) {}

  @common.Post("/fetch-eventix-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchEventixData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchEventixData(body);
      }
}
