import { CommonModule, } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
export interface User {
  Nombre: string,
  Apellidos: string,
  Descripcion: string,
  Edad: number
}
@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, GoogleMapsModule, CommonModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})
export class ProyectoFinalComponent {
  // arreglo donde se guardaran los marcadores de los mapas
  position: any = {}
  class: string = 'btn-success'
   
  // variables para editar usuario
  userEdit = {
    Nombre: '',
    Apellidos: '',
    Descripcion: '',
    Edad: '',
    index: -1
  }
   
  @Output() userIdEmitted = new EventEmitter<number>(); // Event to emit the ID
  // arreglo donde se guardaran los datos del usuario
  users: any[] = [
  ]
  // config formulario para inputs
  formularioUser: FormGroup = new FormGroup({
    Nombre: new FormControl('Papu'),
    Apellidos: new FormControl('Sexo'),
    Descripcion: new FormControl('Lorem'),
    Edad: new FormControl()
  })

  ngOnInit() {
    this.formularioUser = this.forms.group({
      Id: [],
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Edad: ['', Validators.required]
    });
  }
  // Metodo constructor
  constructor(public forms: FormBuilder) {

  }
  // Mapa
  mapOptions: google.maps.MapOptions = {
    center: { lat: 25.797145, lng: -108.977890 },
    zoom: 14,
  }

  obtainCoords(event: any){
    this.position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
}


  // Fin del mapa

  // Agregar/Editar usuario
  submitForm() {
    let user = {
      ...this.formularioUser.value,
      position: this.position
    }
    if (this.formularioUser.valid) {
      if (this.userEdit.index >= 0) {
        this.users[this.userEdit.index] = user
        this.formularioUser.reset();
      } else {
        this.users.push(user);
        this.formularioUser.reset();
      }
    }
  }
  // funciones de las cards
  borrarUsuario(id: number) {
    this.userIdEmitted.emit(id);
    this.users.splice(id, 1);
    console.log(`Elemento ${id} borrado exitosamente`)
  }
  enviarDatos(value: any, index: number) {
    this.userEdit = {
      ...value, index
    }
    console.log(this.userEdit)
    this.formularioUser.reset();
  }
  centrarMapa(usuario: any){
    this.mapOptions = {
      ... this.mapOptions, 
      center: usuario.position
    }

  }
}

