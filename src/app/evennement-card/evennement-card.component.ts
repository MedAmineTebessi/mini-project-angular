import { Component , Input } from '@angular/core';
import { Evennement } from 'src/models/evennement';

@Component({
  selector: 'app-evennement-card',
  templateUrl: './evennement-card.component.html',
  styleUrls: ['./evennement-card.component.css']
})
export class EvennementCardComponent {

  @Input() event: Evennement | undefined;
  

}
