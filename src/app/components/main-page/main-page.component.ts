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
  files: File[] = [];



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
    else if (this.files.length == 0 && this.title_j == "" && this.abstract == ""){
      this.input_error = true;
      this.error_name = "You must complete the information or select a file";
    }
    else {
      this.input_error = false;
      this.error_name = "";
    }

    if (this.input_error == false){
      const formData = new FormData();
  
      if (this.files.length == 0){
        formData.append('data', JSON.stringify({check_j: this.check_j, check_c: this.check_c, title_j: this.title_j, keywords: this.keywords, abstract: this.abstract}));
      }
      else {
        formData.append('data',JSON.stringify({check_j: this.check_j, check_c: this.check_c}));
        formData.append('file', this.files[0]);
      }

      this.isJournals = this.check_j;
      this.isConferences = this.check_c;

      this.getdataService
      .getData(formData)
      .subscribe((data) => {
        this.search_data = data;
        console.log(data);
      });
    } 
  }

  
onSelect(event : any) {
  console.log(event);
  if (this.files.length >= 1) {
    this.files.pop();
  }
  this.files.push(...event.addedFiles);
}

onRemove(event: any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

getName(f: File){
  let file_name = f.name.toString();
  file_name = file_name.replaceAll("_", "_ ").replaceAll("-","- ");
  return file_name

}
  

}
