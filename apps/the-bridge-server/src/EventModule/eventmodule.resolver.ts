import * as graphql from "@nestjs/graphql";
import { EventModuleService } from "./eventmodule.service";

export class EventModuleResolver {
  constructor(protected readonly service: EventModuleService) {}

  @graphql.Query(() => String)
  async GetEvents(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetEvents(args);
  }
}
