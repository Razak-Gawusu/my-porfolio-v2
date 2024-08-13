import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../Button/button.component';
import { AppMobileComponent } from './mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    ButtonComponent,
    AppMobileComponent,
  ],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  toggleMenu() {
    console.log('header', this.isMenuOpen());
    this.isMenuOpen.update((prev) => !prev);
  }
}
