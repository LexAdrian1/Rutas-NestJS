import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InicioController} from "./inicioController";
import {PreguntasFrecuentesController} from "./preguntasFrecuentesController";

@Module({
  imports: [],
  controllers: [AppController,InicioController,PreguntasFrecuentesController],
  providers: [AppService],
})
export class AppModule {}
