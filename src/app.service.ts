import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Bienvenidos a NestJS';
  }

  saludar(nombre: string): string {
    return `Hola ${nombre}, bienvenido a NestJS!`;
  }
}
