import { Component, Input } from '@angular/core';
import { Conference } from 'src/app/models/conference.model';

@Component({
  selector: 'app-conference-card',
  templateUrl: './conference-card.component.html',
  styleUrls: ['./conference-card.component.scss']
})
export class ConferenceCardComponent {

  @Input()
  conference: Conference = new Conference("", "", "", "", "", "", "", "");
  
  
  
}
