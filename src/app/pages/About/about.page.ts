import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/Button';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent, LucideAngularModule],
  template: `<div class="max-w-[670px] mx-auto grid gap-8 py-16 md:py-36 ">
    <div class="grid gap-4">
      <h2 class="font-lora text-5xl leading-[60px]">
        Hey I'm Gawusu - a <span class="text-teal-700">fullstack</span> engineer
        with experience of crafting innovative web projects.
      </h2>
      <p>
        As a versatile full-stack engineer proficient in React, Vue, Angular,
        Node.js, and Express, I possess a strong foundation in building dynamic
        and user-centric applications. My experience spans diverse domains,
        including HR management systems, fintech solutions, and real estate
        platforms.
      </p>

      <p>
        I’ve contributed significantly to projects such as HRMS, where I
        developed robust tools for hiring, assessments, and employee management.
        At Kreditafrica, I played a key role in creating innovative
        credit-related solutions, and at Ownkey, a real estate marketplace.
      </p>

      <p>
        My latest venture, Mypurplepay, involved developing a comprehensive
        platform for managing savings, thrift communities, and loans.
      </p>

      <p>
        These projects have honed my ability to architect and implement complex
        systems while delivering exceptional user experiences. I am eager to
        leverage my skills to tackle complex challenges and create impactful
        solutions that address generational problems.
      </p>
    </div>

    <div>
      <h3 class="font-lora font-semibold">Availability</h3>
      <p>
        I'm keen to explore additional opportunities that spark creativity and
        challenge.
      </p>
    </div>

    <div>
      <app-button class="px-12 w-max" variant="secondary" size="lg">
        <span class="flex gap-2 items-center">
          <lucide-icon name="send" color="white" [size]="16"></lucide-icon>
          Let's chat
        </span>
      </app-button>
    </div>
  </div>`,
})
export class AboutPage {}
