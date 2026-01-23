import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) nombre!: string;
  @Output() seleccion = new EventEmitter<string>();
  
  get rutaImagen() {
    return 'assets/usuarios/' + this.avatar;
  }
  
  alSeleccionarUsuario() {
    this.seleccion.emit(this.id);
  }
}
