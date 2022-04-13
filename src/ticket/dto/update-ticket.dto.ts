import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateTicketDto {
  @IsNotEmpty()
  @IsString()
  ticketId: string;
}
