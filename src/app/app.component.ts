import { Component } from '@angular/core';
import { GetdataService } from './services/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whichJournal';
  myData: any;
  myData$: any; //esto es la lista observable entera
  constructor(private getdataService: GetdataService) {}

  ngOnInit(): void {
    this.getdataService
    .getData()
    .subscribe((data) => {
      this.myData = data;
    });
  }
}
