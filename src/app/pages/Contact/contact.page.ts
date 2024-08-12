import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/Button';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, LucideAngularModule],
  template: `<div class="max-w-[670px] mx-auto grid gap-8 py-16 md:py-36">
    <div class="grid gap-4">
      <h2 class="font-lora text-5xl leading-[60px]">Let's Chat</h2>

      <p>
        In 2024 - alongside my ongoing personal projects I'm keen to explore
        additional opportunities that spark creativity and challenge. If you
        have a project in mind, feel free to schedule a time to chat.
      </p>
      <div>
        <app-button class="px-12 w-max" variant="secondary" size="lg">
          <span class="flex gap-2 items-center">
            <lucide-icon name="send" color="white" [size]="16"></lucide-icon>
            Let's chat
          </span>
        </app-button>
      </div>
    </div>

    <div>
      <h3 class="font-lora font-semibold">Alternate contact options</h3>
      <div>
        You can find me on Twitter /&#64;gawusurazak,
        <a
          class="font-bold underline text-teal-700"
          href="https://www.linkedin.com/in/gawusu-razak-567732174/"
          target="_blank"
          >LinkedIn</a
        >
        or emall me at
        <a
          href="mailto:gawusur@gmail.com"
          class="font-bold underline text-teal-700"
          >gawusur&#64;gmail.com</a
        >
      </div>
    </div>
  </div>`,
})
export class ContactPage {}
