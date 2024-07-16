import { Component } from '@angular/core';
import { TooltipComponent } from '../Tooltip/tooltip.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <section class="space-y-8">
      <div class="max-w-md">
        <h2 class="font-lora text-5xl text-slate-600">Skills.</h2>
        <p class="text-xl">Technologies I'm comfortable with.</p>
      </div>

      <div class="flex gap-8">
        <img src="/assets/icons/html.svg" alt="" />
        <img src="/assets/icons/css-3.svg" alt="" />
        <img src="/assets/icons/javascript.svg" alt="" />
        <img src="/assets/icons/sass.svg" alt="" />
        <img src="/assets/icons/react.svg" alt="" />
        <img src="/assets/icons/vue-js.svg" alt="" />
        <img src="/assets/icons/angular.svg" alt="" class="max-w-36 h-36" />
        <img src="/assets/icons/nextjs.svg" alt="" />
        <img src="/assets/icons/nodejs.svg" alt="" />
        <img src="/assets/icons/express.svg" alt="" />
      </div>
    </section>
  `,
})
export class SkillsComponent {}
