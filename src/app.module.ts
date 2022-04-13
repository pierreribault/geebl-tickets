import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MqttModule } from 'nest-mqtt';
import { TicketModule } from './ticket/ticket.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MqttModule.forRoot({
      host: process.env.MQTT_HOST,
      port: Number(process.env.MQTT_PORT),
      clientId: process.env.MQTT_CLIENT_ID,
      clean: false ,
    }),
    TicketModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
