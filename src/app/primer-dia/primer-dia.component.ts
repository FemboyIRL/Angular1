import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input()ejemplo:string = '';

  @Input()usuario:number = 0;

  title = 'Proyecto1';    
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate iusto neque exercitationem, quam totam dolor alias corporis consequuntur veniam, rerum labore ipsam dignissimos modi? Ea ipsam nam at magnam.'
  card = {
  title : 'Crunchita',
  description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate iusto neque exercitationem, quam totam dolor alias corporis consequuntur veniam, rerum labore ipsam dignissimos modi? Ea ipsam nam at magnam.'
  }
  card2 = {
    title : 'MishaNazi',
  }
}
