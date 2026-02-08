import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [EmpleadosModule, TareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
