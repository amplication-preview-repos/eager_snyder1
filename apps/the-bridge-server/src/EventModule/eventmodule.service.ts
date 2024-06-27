import { Injectable } from "@nestjs/common";

@Injectable()
export class EventModuleService {
  constructor() {}
  async GetEvents(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
