import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LoggedInComponent } from './logged-in.component';
import { HasRoleDirective } from 'src/app/directive/hasRole.directive';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [LoggedInComponent, HasRoleDirective],
  providers: [],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
