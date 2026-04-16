import { Injectable } from '@nestjs/common';
import { IncidentStatus } from '@prisma/client';
import { CreateIncidentInput } from './dto/create-incident.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class IncidentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateIncidentInput) {
    return this.prisma.incident.create({
      data: {
        description: data.description,
        machineName: data.machineName,
        severity: data.severity,
        typeOfOccurrence: data.typeOfOccurrence,
        status: data.status ?? IncidentStatus.ABERTO,
      },
    });
  }

  async findLastIncidents(limit?: number) {
    return this.prisma.incident.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: limit ?? 5,
    });
  }
}
