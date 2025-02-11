import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HorizontalComponent,
    VerticalComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
