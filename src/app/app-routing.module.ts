import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewpageComponent } from './components/newpage/newpage.component';
import { TestpageComponent } from './components/testpage/testpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/newpage',
    pathMatch: 'full'
  },
  {
    path: 'newpage',
    component: NewpageComponent
  },
  {
    path: 'test',
    component: TestpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
