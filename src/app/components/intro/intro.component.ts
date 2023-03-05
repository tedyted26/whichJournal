import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any){}

ngOnInit(): void {
  this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: ' #search'
  })
}

}

