import { Component } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
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
