import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NuevaTareaInfo } from '../tarea/tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css'
})
export class NuevaTareaComponent {
  @Input({required: true}) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();
  
  tituloIngresado = signal(''); //Ejemplo de manejo de signal
  resumenIngresado = '';
  fechaIngresada = '';
  private tareasService = inject(TareasService);

  alcancelar() {
    this.cerrar.emit();
  }

  alEnviar() {
    this.tareasService.agregarTarea(
      {
      titulo: this.tituloIngresado(),
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresada
      }, this.idUsuario
    );
    this.cerrar.emit();
    /*this.agregar.emit({
      titulo: this.tituloIngresado(),
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresada,
    }
    )*/ //Cuando los datos estaban en tareas.component 
  };
}
