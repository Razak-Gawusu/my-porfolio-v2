import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../Button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alt-single-project',
  standalone: true,
  imports: [ButtonComponent, LucideAngularModule, CommonModule],
  template: `
    <div class="grid gap-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <a [href]="link" target="_blank">
          <app-button variant="ghost" class="!p-0 text-2xl"
            >{{ name }} <lucide-icon [size]="20" name="externalLink"
          /></app-button>
        </a>
        <div class="flex items-center gap-2 text-xs">
          <div
            *ngFor="let tech of techStack"
            class="border-2 border-teal-700 px-4 py-1 rounded-full"
          >
            {{ tech }}
          </div>
        </div>
      </div>

      <div
        class="rounded-2xl overflow-hidden p-1.5 bg-teal-700/50 md:h-[420px]"
      >
        <img
          [src]="src"
          [alt]="name"
          class="rounded-2xl h-full w-full object-cover"
        />
      </div>
      <div class="px-6 py-1 bg-white bottom-0 md:w-3/4">{{ desc }}</div>
    </div>
  `,
})
export class AltSingleProjectComponent {
  @Input() name!: string;
  @Input() link?: string;
  @Input() src!: string;
  @Input() desc?: string;
  @Input() techStack?: string[];
}
