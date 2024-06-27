import { Module } from "@nestjs/common";
import { EventixIntegrationService } from "./eventixintegration.service";
import { EventixIntegrationController } from "./eventixintegration.controller";
import { EventixIntegrationResolver } from "./eventixintegration.resolver";

@Module({
  controllers: [EventixIntegrationController],
  providers: [EventixIntegrationService, EventixIntegrationResolver],
  exports: [EventixIntegrationService],
})
export class EventixIntegrationModule {}
