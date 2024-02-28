import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Proyecto1';
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate iusto neque exercitationem, quam totam dolor alias corporis consequuntur veniam, rerum labore ipsam dignissimos modi? Ea ipsam nam at magnam.'
  card ={
  title : 'Crunchita',
  description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate iusto neque exercitationem, quam totam dolor alias corporis consequuntur veniam, rerum labore ipsam dignissimos modi? Ea ipsam nam at magnam.'
  }
  card2={
    title : 'MishaNazi',
  }
}
