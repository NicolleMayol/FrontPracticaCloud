import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
];

const COMPONENTS = [
  FooterComponent,
  NavigationComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ...MODULES],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],

})
export class SharedModule { }
