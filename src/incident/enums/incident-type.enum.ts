import { registerEnumType } from '@nestjs/graphql';
import { IncidentTypeOfOccurrence } from '@prisma/client';

registerEnumType(IncidentTypeOfOccurrence, {
  name: 'IncidentTypeOfOccurrence',
});

export { IncidentTypeOfOccurrence };
