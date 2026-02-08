import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('saludo')
  saludo(@Query('nombre') nombre: string): string {
    return this.appService.saludar(nombre)
  }


  @Get('suma')
  suma(
    @Query('a') a: string,
    @Query('b') b: string
  ): string {
    const resultado = Number(a) + Number(b);
    return `La suma de ${a} y ${b} es: ${resultado}`;
    // Implement the suma logic here
  }
}
