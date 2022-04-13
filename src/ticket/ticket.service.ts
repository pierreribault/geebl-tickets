import { Inject, Injectable, Logger } from '@nestjs/common';
import { Subscribe, Payload, MqttService } from 'nest-mqtt';
import { PrismaService } from 'src/prisma.service';
import { toDataURL as QRCode } from 'qrcode';
import {
  Ticket,
  Prisma,
} from '@prisma/client';

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);

  constructor(
    private prisma: PrismaService,
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  @Subscribe('create-tickets')
  async create(@Payload() payload) {
    const {eventId, userId, companyId, slotId} = payload

    this.logger.log(`Create ${payload.quantity} tickets for ${slotId}`)

    for (let i = 0; i < payload.quantity; i++) {
      await this.prisma.ticket.create({
        data: { eventId, userId, companyId, slotId}
      });
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TicketWhereUniqueInput;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput;
  }): Promise<Ticket[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ticket.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(ticketId: string): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({
      where: {
        id: ticketId
      }
    });
  }

  async use(ticketId: string): Promise<Ticket | null> {
    return this.prisma.ticket.update({
      where: {
        id: ticketId
      },
      data: {used: true}
    });
  }

  async used(ticketId: string): Promise<boolean> {
    return await this.prisma.ticket.count({
      where: {
        id: ticketId,
        used: true
      }
    }) == 1;
  }

  async generateQRCode(text: string): Promise<string> {
    try {
      return await QRCode(text);
    } catch (err) {
      throw err;
    }
  }

  @Subscribe('refund-payment')
  async refound(@Payload() payload) {
    const { slotId } = payload

    this.logger.log(`Disable tickets of ${slotId} after refund`)

    await this.prisma.ticket.updateMany({
      where: { slotId: slotId },
      data: {
        used: true
      }
    });
  }
}
