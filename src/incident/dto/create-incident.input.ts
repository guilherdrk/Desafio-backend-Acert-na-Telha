import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IncidentSeverity } from '../enums/incident-severity.enum';
import { IncidentStatus } from '../enums/incident-status.enum';
import { IncidentTypeOfOccurrence } from '../enums/incident-type.enum';

@InputType()
export class CreateIncidentInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  machineName!: string;

  @Field(() => IncidentSeverity)
  @IsEnum(IncidentSeverity)
  severity!: IncidentSeverity;

  @Field(() => IncidentTypeOfOccurrence)
  @IsEnum(IncidentTypeOfOccurrence)
  typeOfOccurrence!: IncidentTypeOfOccurrence;

  @Field(() => IncidentStatus, { nullable: true })
  @IsEnum(IncidentStatus)
  status?: IncidentStatus;
}
