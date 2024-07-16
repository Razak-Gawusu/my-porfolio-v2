import { Component, Input } from '@angular/core';
import { HelperService } from '../../utils/helper.service';
import { ClassValue } from 'clsx';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  template: `<div [class]="cn('relative group', class)">
    <ng-content></ng-content>
    <div [class]="cn('absolute hidden group-hover:block p-2 top-0 shadow-sm')">
      <p>{{ label }}</p>
    </div>
  </div>`,
})
export class TooltipComponent {
  @Input() label!: string;
  @Input() class!: string;

  constructor(private helper: HelperService) {}

  cn(...inputs: ClassValue[]) {
    return this.helper.cn(inputs);
  }
}
