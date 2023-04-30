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
  check_j: boolean = true;
  check_c: boolean = false;
  title_j: string = "";
  keywords: string = "";
  abstract: string = "";

  input_error = false;
  error_name = "";
  isJournals = false;
  isConferences = false;


//esto es la lista observable entera
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private getdataService: GetdataService) {}
  ngOnInit(): void {
  this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '#your_results'
  })
}

  send_data(){
    if (this.check_j == false && this.check_c == false){
      this.input_error = true;
      this.error_name = "Don't leave boxes unchecked!";
    }
    else if (this.title_j == "" && this.abstract == ""){
      this.input_error = true;
      this.error_name = "Title or abstract missing";
    }
    else {
      this.input_error = false;
      this.error_name = "";
    }

    if (this.input_error == false){
      var data_to_send = {check_j: this.check_j, check_c: this.check_c, title_j: this.title_j, keywords: this.keywords, abstract: this.abstract};
      this.isJournals = this.check_j;
      this.isConferences = this.check_c;

      this.getdataService
      .getData(data_to_send)
      .subscribe((data) => {
        this.search_data = data;
        console.log(data);
      });
    } 
  }
  

}
