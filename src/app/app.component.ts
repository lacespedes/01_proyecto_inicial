import { Component } from '@angular/core';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { TareaComponent } from './tarea/tarea.component';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [EncabezadoComponent, UsuarioComponent, TareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idUsuariSeleccionado = 'u1';

  get usuarioSeleccionado() {
    return this.usuarios.find((usuario) => usuario.id === this.idUsuariSeleccionado)!;
  }

  alSeleccionarUsuario(id: string) {
    this.idUsuariSeleccionado = id;
  }
}
