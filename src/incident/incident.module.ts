import { Module } from '@nestjs/common';
import { IncidentResolver } from './incident.resolver';
import { IncidentService } from './incident.service';

@Module({
  providers: [IncidentResolver, IncidentService],
})
export class IncidentModule {}
