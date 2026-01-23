import { Component, computed, signal } from '@angular/core';
import { USUARIOS_FALSOS } from '../usuarios-falsos';
const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length)

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuarioSeleccionado = signal(USUARIOS_FALSOS[indiceAleatorio]);

  rutaImagen = computed(() =>'assets/usuarios/' + this.usuarioSeleccionado().avatar);

  //get rutaImagen() {
  //  return 'assets/usuarios/' + this.usuarioSeleccionado.avatar;
  //}

  alSeleccionarUsuario() {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length)
    this.usuarioSeleccionado.set(USUARIOS_FALSOS[indiceAleatorio]);
    
  }
}
