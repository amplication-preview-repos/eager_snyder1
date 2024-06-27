import { Injectable } from "@nestjs/common";

@Injectable()
export class EventixIntegrationService {
  constructor() {}
  async FetchEventixData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
