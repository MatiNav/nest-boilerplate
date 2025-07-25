import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Environment } from './config/env';

@Module({
  imports: [ConfigModule.forRoot({ load: [Environment] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
