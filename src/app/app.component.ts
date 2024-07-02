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
    <main class="container px-6 pt-6 pb-80 bg-slate-100">
      <router-outlet></router-outlet>
    </main>
  </div>`,
})
export class AppComponent {
  title = 'my-portfolio';
}
