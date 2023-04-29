import { Component, Input } from '@angular/core';
import { Journal } from 'src/app/models/journal.model';

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.scss']
})
export class JournalCardComponent {
imagePath: String = "assets/book.jpg";

@Input()
journal: Journal = new Journal("", "", "", "", "", "", "", "", "", "", "", "","","","","");

}
