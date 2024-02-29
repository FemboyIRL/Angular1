import { Component } from '@angular/core';
import { MichisService } from '../services/michis.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss'
})
export class RandomComponent {
   michiActualElement = document.getElementById("michiActual");
   spinner = document.getElementById("spinner");
   users: any = []

  constructor(public service: MichisService) {

  }
  ngOnInit() {
    this.service.nuevoMichi().subscribe(resp => {
      console.log(resp)
      this.users = resp
    })
}
}
