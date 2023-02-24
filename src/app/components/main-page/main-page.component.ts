import { Component } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
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
