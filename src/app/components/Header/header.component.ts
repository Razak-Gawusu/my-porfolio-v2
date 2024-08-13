import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../Button/button.component';
import { AppMobileComponent } from './mobile.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    ButtonComponent,
    AppMobileComponent,
    NgIf,
  ],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isOpen = signal(false);

  constructor() {}

  toggleSidebar() {
    console.log(this.isOpen());
    this.isOpen.update((prev) => !prev);
  }
}
