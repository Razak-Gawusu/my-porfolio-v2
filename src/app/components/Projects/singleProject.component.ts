import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../Button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [ButtonComponent, LucideAngularModule],
  template: `
    <div class="relative h-full rounded-lg overflow-hidden">
      <div class="w-full h-full p-1.5 bg-teal-700/50 ">
        <img [src]="src" alt="" class="w-full h-full object-cover rounded-lg" />
      </div>
      <div
        class="absolute bottom-0 w-full h-16 bg-teal-700/50 flex items-center px-4"
      >
        <a [href]="link ? link : '#'" target="_blank">
          <app-button variant="ghost" class="!p-0"
            >{{ name }} <lucide-icon [size]="20" name="externalLink"
          /></app-button>
        </a>
      </div>
    </div>
  `,
})
export class SingleProjectComponent {
  @Input() name!: string;
  @Input() link?: string;
  @Input() src!: string;
}
