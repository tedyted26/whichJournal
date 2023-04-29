import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { Conference } from 'src/app/models/conference.model';
import { Journal } from 'src/app/models/journal.model';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  error_text: string = ""

  @Input()
  search_data: any = "";

  @Input()
  isJournals: boolean = false;

  @Input()
  isConferences: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }
}
