import { Injectable } from '@nestjs/common';
import { EstadoTarea, Tarea } from './tarea.entity';

@Injectable()
export class TareasService {

    private tareas: Tarea[] = [];


    obtenerTodasLasTareas(): Tarea[] {
        return this.tareas;
    }


    crearTarea(titulo: string, descripcion: string): Tarea {
        const nuevaTarea: Tarea = {
            id: new Date().toISOString(),
            titulo: titulo,
            descripcion,
            estado: EstadoTarea.PENDIENTE,
        };
        this.tareas.push(nuevaTarea);
        return nuevaTarea;
    }


    obtnerPorId(id: string): Tarea {
        const tareaEncontrada = this.tareas.find(tarea => tarea.id === id);
        if (!tareaEncontrada) {
            throw new Error('Tarea no encontrada');
        }
        return tareaEncontrada;
    }


    actulizarEstado(id: string, nuevoEstado: EstadoTarea): Tarea {
        const tarea = this.obtnerPorId(id);
        tarea.estado = nuevoEstado;
        return tarea;
    }

    eliminarTarea(id: string): void {
        this.obtnerPorId(id);
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    }
}