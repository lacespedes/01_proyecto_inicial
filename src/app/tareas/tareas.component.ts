import { Component, Input, Output } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  @Input({required: true}) idUsuario!: string;
  @Input({required: true}) nombre!: string;
  estaAgregandotareaNueva = false;

  constructor(private tareasService: TareasService) {}
  
   get tareasUsuarioSeleccionado() {
    return this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
  }

/*  alCompletarTarea(id: string) {
    this.tareasService.eliminarTarea(id);
  }*/

  alIniciarNuevaTarea() {
    this.estaAgregandotareaNueva = true;
  }

  alCerrarTareaNueva() {
    this.estaAgregandotareaNueva = false;
  }
}
