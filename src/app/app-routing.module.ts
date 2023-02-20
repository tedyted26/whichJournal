import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetdataService } from './services/getdata.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
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
