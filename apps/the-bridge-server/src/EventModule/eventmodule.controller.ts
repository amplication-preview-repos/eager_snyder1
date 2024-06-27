import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventModuleService } from "./eventmodule.service";

@swagger.ApiTags("eventModules")
@common.Controller("eventModules")
export class EventModuleController {
  constructor(protected readonly service: EventModuleService) {}

  @common.Get("/events")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetEvents(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetEvents(body);
      }
}
