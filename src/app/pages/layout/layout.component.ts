import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [RouterOutlet,CommonModule, VerticalComponent, HorizontalComponent, NotificationComponent]
})
export class LayoutComponent {

  isNavbarToggled = false;

  onToggleChange(isToggled: boolean) {
    this.isNavbarToggled = isToggled;
  }

}
