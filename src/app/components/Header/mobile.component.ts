import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import { HelperService } from '../../utils/helper.service';
import { ClassValue } from 'clsx';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../Button';
import { SharedDataService } from '../../services';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  template: `<div
    [class]="
      cn(
        'hidden absolute top-0 bg-teal-700 px-6 py-8 max-sm:flex flex-col gap-6 h-full w-screen overflow-y-auto noscroll-indicator transition-all duration-300 ease-in z-20',
        'max-md:left-[-100%] max-md:fixed',
        { 'max-md:left-0': isOpen() }
      )
    "
  >
    <div class="flex justify-end">
      <button class="w-max text-white !px-0" (click)="toggle()">
        <lucide-icon name="x" [color]="'white'" width="{24}" height="{24}" />
      </button>
    </div>

    <nav class="flex flex-col gap-6 text-white text-2xl">
      <a routerLink="/" (click)="toggle()">Home</a>
      <a routerLink="/projects" (click)="toggle()">Projects</a>
      <a routerLink="/about" (click)="toggle()">About us</a>
      <a routerLink="/contact" (click)="toggle()">Contact</a>
    </nav>
  </div>`,
  imports: [LucideAngularModule, ButtonComponent, RouterModule],
})
export class AppMobileComponent {
  @Input() isOpen!: WritableSignal<boolean>;

  @Output() toggleSidebar = new EventEmitter();

  constructor(private helper: HelperService) {}

  cn(...inputs: ClassValue[]) {
    return this.helper.cn(inputs);
  }

  toggle() {
    this.toggleSidebar.emit();
  }
}
