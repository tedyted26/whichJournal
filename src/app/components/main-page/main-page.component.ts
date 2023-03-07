import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  title = 'whichJournal';
  search_data: any ="";

//esto es la lista observable entera
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private getdataService: GetdataService) {}
  ngOnInit(): void {
  this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '#your_results'
  })
}

  send_data(value: string){
    
    this.getdataService
    .getData(value)
    .subscribe((data) => {
      this.search_data = data;
      console.log(data);
    });   
  }
  

}
