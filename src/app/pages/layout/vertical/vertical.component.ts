import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss'
})
export class VerticalComponent {
  menus = [
    {
      section: 'Favorites',
      items: [
        { name: 'Overview', icon: 'dot', selected: false },
        { name: 'Projects', icon: 'dot', selected: false }
      ]
    },
    {
      section: 'Dashboards',
      items: [
        { name: 'Overview', icon: 'dashboard', selected: true },
        { name: 'eCommerce', icon: 'shopping_cart', selected: false },
        { name: 'Projects', icon: 'folder', selected: false },
        { name: 'Online Courses', icon: 'school', selected: false }
      ]
    },
    {
      section: 'Pages',
      items: [
        { name: 'User Profile', icon: 'person', selected: false },
        { name: 'Account', icon: 'account_balance', selected: false },
        { name: 'Corporate', icon: 'groups', selected: false },
        { name: 'Blog', icon: 'article', selected: false },
        { name: 'Social', icon: 'chat', selected: false }
      ]
    }
  ];

  onMenuClick(item: any) {
    this.menus.forEach(menu =>
      menu.items.forEach(i => (i.selected = false))
    );
    item.selected = true;
  }
}
