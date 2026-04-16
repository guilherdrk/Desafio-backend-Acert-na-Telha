import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IncidentSeverity } from '../enums/incident-severity.enum';
import { IncidentStatus } from '../enums/incident-status.enum';
import { IncidentTypeOfOccurrence } from '../enums/incident-type.enum';

@ObjectType()
export class IncidentModel {
  @Field(() => ID)
  id!: string;

  @Field()
  description!: string;

  @Field()
  machineName!: string;

  @Field(() => IncidentSeverity)
  severity!: IncidentSeverity;

  @Field()
  createdAt!: Date;

  @Field(() => IncidentStatus)
  status!: IncidentStatus;

  @Field(() => IncidentTypeOfOccurrence)
  typeOfOccurrence!: IncidentTypeOfOccurrence;
}
