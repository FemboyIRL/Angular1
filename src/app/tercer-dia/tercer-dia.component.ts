import { Component } from '@angular/core';
import { EjemploService } from '../services/ejemplo.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {
  correo = "";
  name = "";
  users: any = []
  constructor(public service: EjemploService) {

  }

  ngOnInit() {
    this.service.obtenerlista().subscribe(resp => {
      this.users = resp;
    })
  }
  editarText(text:string){
    console.log(text);
    return text;
  }
}
