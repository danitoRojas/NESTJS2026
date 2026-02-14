import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { TareasModule } from './tareas/tareas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EmpleadosModule, TareasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
