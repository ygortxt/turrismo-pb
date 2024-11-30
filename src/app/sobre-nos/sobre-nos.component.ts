import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicionar o CommonModule, caso necessário

@Component({
  selector: 'app-sobre-nos',
  standalone: true, // Componente standalone
  imports: [CommonModule], // Incluindo CommonModule
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
})
export class SobreNosComponent {}
