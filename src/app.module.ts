import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule, MongooseModule.forRoot(ConfigService.keys.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
