import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {
  btn_class = "btn btn-success"
  variable = ''
  name = ''
  descripcion = ''

  formulariouser:FormGroup = new FormGroup({
    name: new FormControl(''),
    descripcion: new FormControl('')
  })
  user = [
    {
      name: 'luis 1',
      descripcion: 'lorem'
    },
    {
      name: 'luis 2',
      descripcion: 'lorem'
    },
    {
      name: 'luis 3',
      descripcion: 'lorem'
    },
    {
      name: 'luis 4',
      descripcion: 'lorem'
    }

  ]
  constructor(){
  }
  ngOnInit() {
  }

  ngDoCheck(): void {
  }
  ngOnDestroy() {
  }
  clickButton(text:string){
    this.variable = text
  }
  submitForm1(){
    this.formulariouser.controls['name'].disable()
    this.formulariouser.controls['descripcion'].disable()

    console.log(this.formulariouser.value)
  }
  submitForm2(){
    console.log("El nombre es " + this.name + " y la descripcion es" + this.descripcion   )
  }
}
