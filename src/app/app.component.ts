import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from './components';
import { HeaderComponent } from './components/Header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule, IconComponent, HeaderComponent],
  template: `<div>
    <app-header></app-header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>

    <footer class="container flex max-sm:justify-center md:justify-end mt-20">
      Gawusu Razak © 2024. All Right Reserved
    </footer>
  </div>`,
})
export class AppComponent {
  title = 'my-portfolio';
}
