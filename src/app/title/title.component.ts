import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  title = 'Lorem ipsum dolor sit amet';
  contenu = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin lectus quis lacinia commodo.'
}
