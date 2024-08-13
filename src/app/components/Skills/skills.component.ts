import { Component } from '@angular/core';
import { TooltipComponent } from '../Tooltip/tooltip.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <section class="space-y-8  max-sm:mt-28">
      <div class="max-w-md">
        <h2 class="font-lora text-3xl md:text-5xl text-slate-800">Skills.</h2>
        <p class="md:text-xl">Technologies I'm comfortable with.</p>
      </div>

      <div class="flex gap-8 items-center overflow-x-auto noscroll-indicator">
        <img src="/assets/icons/html.svg" alt="" />
        <img src="/assets/icons/css-3.svg" alt="" />
        <img src="/assets/icons/javascript.svg" alt="" />
        <img src="/assets/icons/sass.svg" alt="" />
        <img src="/assets/icons/react.svg" alt="" />
        <img src="/assets/icons/vue-js.svg" alt="" />
        <img src="/assets/icons/angular.svg" alt="" class="max-w-36 h-36" />
        <img src="/assets/icons/nextjs.svg" alt="" class="w-24 h-24" />
        <img src="/assets/icons/nodejs.svg" alt="" />
        <img src="/assets/icons/express.svg" alt="" />
      </div>
    </section>
  `,
})
export class SkillsComponent {}
