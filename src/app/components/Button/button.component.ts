import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassValue } from 'clsx';
import { LucideAngularModule } from 'lucide-angular';
import { NgIf } from '@angular/common';
import { VariantProps, cva } from 'class-variance-authority';
import { IconComponent } from '../Icon';
import { HelperService } from '../../utils/helper.service';
import { VariantService } from '../../utils/styleVariants.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [LucideAngularModule, NgIf, IconComponent],
  template: `
    <button
      (click)="onClick($event)"
      [type]="type"
      [disabled]="disabled"
      [class]="cn(buttonVariants({ variant, size }), 'flex gap-2 items-center', class)"
    >
      <app-icon
        *ngIf="isLoading; else show"
        iconName="Spinner"
        iconSize="32px"
        iconColor="blue"
        class="animate-spin"
      ></app-icon>

      <ng-template #show>
        <ng-content></ng-content>
      </ng-template>
    </button>
  `,
})
export class ButtonComponent {
  buttonVariants;
  @Input() class?: string;
  @Input() isLoading?: boolean;
  @Input() disabled?: boolean;
  @Input() type?: 'button' | 'submit' | 'reset' | 'menu';
  @Input() size?: VariantProps<typeof this.variants.buttonVariants>['size'];
  @Input() variant?: VariantProps<
    typeof this.variants.buttonVariants
  >['variant'];
  @Output() click = new EventEmitter<any>();

  constructor(private helper: HelperService, private variants: VariantService) {
    this.buttonVariants = variants.buttonVariants;
  }

  cn(...inputs: ClassValue[]) {
    return this.helper.cn(inputs);
  }
  onClick($event: any) {
    this.click.emit($event);
  }
}
