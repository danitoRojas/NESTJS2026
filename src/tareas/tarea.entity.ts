export enum EstadoTarea {
    PENDIENTE = 'pendiente',
    EN_PROGRESO = 'en_progreso',
    COMPLETADA = 'completada',
}

export class Tarea {
    id: string;
    titulo: string;
    descripcion: string;
    estado: EstadoTarea;
}
