import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `<header class="">
    <div
      class="container py-8 flex justify-between items-center font-cantarell text-lg text-slate-500"
    >
      <span class="font-medium uppercase text-slate-800">Gawusu Razak</span>
      <nav class="flex gap-12">
        <a routerLink="/" routerLinkActive="active-link">Home</a>
        <a routerLink="/projects" routerLinkActive="active-link">Projects</a>
        <a routerLink="/about" routerLinkActive="active-link">About Me </a>
      </nav>
    </div>
  </header>`,
})
export class HeaderComponent {}
