import { registerEnumType } from '@nestjs/graphql';
import { IncidentSeverity } from '@prisma/client';

registerEnumType(IncidentSeverity, {
  name: 'IncidentSeverity',
});

export { IncidentSeverity };
