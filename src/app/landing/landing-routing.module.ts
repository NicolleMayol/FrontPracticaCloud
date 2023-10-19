import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [
    {
      path: 'index',
      component: IndexComponent,
    },
    {
      path: '',
      redirectTo: 'index',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
