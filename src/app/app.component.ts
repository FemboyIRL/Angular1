import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { RandomComponent } from './random/random.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , PrimerDiaComponent, SegundoDiaComponent,RandomComponent,TercerDiaComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dinamico = 'Hola yo me llamo joaquin'
  user = 3
}
