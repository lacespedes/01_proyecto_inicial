import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Tarea } from './tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  @Input({required: true}) tarea!: Tarea
  //@Output() terminada = new EventEmitter<string>();
  private tareaService = inject(TareasService);

  alCompletarTarea() {
    this.tareaService.eliminarTarea(this.tarea.id);
    //this.terminada.emit(this.tarea.id);
  }
}
