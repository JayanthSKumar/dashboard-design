import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  notifications = [
    { icon: 'bug_report', text: 'You fixed a bug.', time: 'Just now' },
    { icon: 'person_add', text: 'New user registered.', time: '59 minutes ago' },
    { icon: 'bug_report', text: 'You fixed a bug.', time: '12 hours ago' },
    { icon: 'notifications', text: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM' }
  ];

  activities = [
    { img: "https://cdn-icons-png.flaticon.com/512/219/219983.png", text: 'Changed the style.', time: 'Just now' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', text: 'Released a new version.', time: '59 minutes ago' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', text: 'Submitted a bug.', time: '12 hours ago' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', text: 'Modified A data in Page X.', time: 'Today, 11:59 AM' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', text: 'Deleted a page in Project X.', time: 'Feb 2, 2024' }
  ];

  contacts = [
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', name: 'Natali Craig' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', name: 'Drew Cano' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', name: 'Andi Lane' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', name: 'Koray Okumus' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', name: 'Kate Morrison' },
    { img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', name: 'Melody Macy' }
  ];

}
