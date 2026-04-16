import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateIncidentInput } from './dto/create-incident.input';
import { IncidentModel } from './models/incident.model';
import { IncidentService } from './incident.service';

@Resolver(() => IncidentModel)
export class IncidentResolver {
  constructor(private readonly incidentService: IncidentService) {}

  @Mutation(() => IncidentModel)
  async createIncident(
    @Args('data') data: CreateIncidentInput,
  ): Promise<IncidentModel> {
    return this.incidentService.create(data);
  }

  @Query(() => [IncidentModel])
  async lastIncidents(
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
  ): Promise<IncidentModel[]> {
    return this.incidentService.findLastIncidents(limit);
  }
}
