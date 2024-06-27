import * as graphql from "@nestjs/graphql";
import { EventixIntegrationService } from "./eventixintegration.service";

export class EventixIntegrationResolver {
  constructor(protected readonly service: EventixIntegrationService) {}

  @graphql.Mutation(() => String)
  async FetchEventixData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchEventixData(args);
  }
}
