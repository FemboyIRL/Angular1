import { Component } from '@angular/core';
import { EjemploService } from '../services/ejemplo.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export interface User {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {

  users: User[] = []
  datos = {
    id: 1,
    title: 'foo',
    body: 'bar',
  } as any;

  

  formularioUser: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl('')
  })
  constructor(public service: EjemploService, public forms: FormBuilder) {

  }

  ngOnInit() {
    this.service.obtenerlista().subscribe(resp => {
      console.log(resp)
      this.users = resp;
      this.formularioUser = this.forms.group({
        id: [''],
        title: [''],
        body: [''],
      })
    })
  }
  enviarDatos() {
    const formData = this.formularioUser.value;
    this.service.MetodoPost(formData).subscribe(resp => {
      console.log('Datos enviados:', resp);
      const newUser = { id: resp.id, title: formData.title, body: formData.body, userId: formData.userId };
      this.users.push(newUser);
      this.formularioUser.reset();
    })
  }
  borrarDatos(id: number) {
    this.service.MetodoDelete(id).subscribe(resp => {
      console.log('Datos eliminados:', resp);
      const index = this.users.findIndex((user: User) => user.id === id);
      if (index !== -1) {
        this.users.splice(index, 1);
        console.log(`El índice del elemento con id ${id} es ${index}`);
      } else {
        console.log(`No se encontró ningún elemento con id ${id} en el array 'users'`);
      }
    })
  }
  parchearDatos(id: number) {
    const formData = this.formularioUser.value;
    this.service.MetodoPut(formData).subscribe(resp => {
      console.log(resp) 
    })
  }
}
