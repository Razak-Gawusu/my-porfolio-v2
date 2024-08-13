import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../Button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule, ButtonComponent, RouterModule],
  template: `
    <section class="flex flex-col gap-8 max-w-[946px]">
      <div class="flex flex-col gap-8">
        <div class="flex gap-2 items-center">
          <p class="md:text-xl ">Hi. I'm Gawusu</p>
          <lucide-icon name="hand" />
        </div>
        <h1 class="font-lora text-7xl md:text-8xl leading-[80px]">
          <span class="text-teal-700">Fullstack</span> Engineer
        </h1>
        <p class="md:text-xl max-w-[684px]">
          I'm a Software Engineer who is passionate about developing web apps
          that increase the Organization's effectiveness and efficiency.
        </p>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row">
        <a href="mailto:gawusur@gmail.com">
          <app-button size="lg" variant="secondary" class="max-sm:w-full"
            >Get in touch<lucide-icon name="phone" [size]="20"
          /></app-button>
        </a>
        <a routerLink="/projects">
          <app-button size="lg" class="max-sm:w-full"
            >View projects <lucide-icon name="mail" [size]="20" />
          </app-button>
        </a>
      </div>
    </section>
  `,
})
export class HeroComponent {}
