import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled", anchorScrolling: 'enabled', scrollOffset: [0,64]})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
