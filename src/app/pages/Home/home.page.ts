import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/Button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<div>
    <div class="flex flex-col p-4 gap-8 max-w-[700px]">
      <div class="flex flex-col gap-4">
        <h1 class="font-lora text-7xl leading-[80px]">Hi. I'm Gawusu</h1>
        <p class="text-lg ">
          I'm a Software Engineer who is passionate about developing web apps
          that increase the Organization's effectiveness and efficiency.
        </p>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row">
        <app-button size="lg">Get in touch</app-button>
        <app-button size="lg">View projects</app-button>
      </div>
    </div>
  </div>`,
  imports: [ButtonComponent],
})
export class HomePage {}
