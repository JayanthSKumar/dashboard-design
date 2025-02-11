import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal.component.html',
  styleUrl: './horizontal.component.scss'
})
export class HorizontalComponent {
  @Output() toggleChange = new EventEmitter<boolean>();

  isToggled = false;

  toggleNavbar() {
    this.isToggled = !this.isToggled;
    this.toggleChange.emit(this.isToggled); // Emit toggle state to the parent component
    console.log(this.isToggled);
    
  }
}
