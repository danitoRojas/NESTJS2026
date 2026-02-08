import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { EstadoTarea } from './tarea.entity';

@Controller('tareas')
export class TareasController {

    constructor(private readonly tareasService: TareasService) { }

    @Get()
    obtenerTodas() {
        return this.tareasService.obtenerTodasLasTareas();
    }


    @Post()
    crearTarea(
        @Body('titulo') titulo: string,
        @Body('descripcion') descripcion: string,

    ) {
        return this.tareasService.crearTarea(titulo, descripcion);
    }


    @Get('/:id')
    obtenerTareaPorId(@Param('id') id: string) {
        return this.tareasService.obtnerPorId(id);
    }


    @Patch('/:id/estado')
    actualizarEstado(
        @Param('id') id: string,
        @Body('estado') estado: EstadoTarea,
    ) {
        const tarea = this.tareasService.actulizarEstado(id, estado);
        return tarea;
    }


    @Delete('/:id')
    eliminarTarea(@Param('id') id: string) {
        this.tareasService.eliminarTarea(id);
        return { mensaje: 'Tarea eliminada correctamente' };
    }

}
