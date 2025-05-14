import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  mensajes: string[] = [];
  nuevoMensaje: string = '';

  enviarMensaje(chatBox: HTMLElement) {
    const mensaje = this.nuevoMensaje.trim();
    if (mensaje !== '') {
      this.mensajes.push(mensaje);
      this.nuevoMensaje = '';

      // Hacer scroll al final
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
      });
    }
  }
}
