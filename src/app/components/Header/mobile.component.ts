import { Component, Input, WritableSignal } from '@angular/core';
import { HelperService } from '../../utils/helper.service';
import { ClassValue } from 'clsx';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../Button';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  template: `<div
    [class]="
      cn(
        'hidden absolute top-0 bg-teal-700 py-5 px-6 max-sm:flex flex-col gap-6 h-full w-screen overflow-y-auto noscroll-indicator transition-all duration-300 ease-in z-20',
        'max-md:left-[-100%] max-md:fixed',
        { 'max-md:left-0': isMenuOpen() }
      )
    "
  >
    <app-button
      variant="ghost"
      className="w-max text-white !px-0 !bg-red-500"
      onClick="{toggleSidebar}"
    >
      <lucide-icon
        name="ArrowLeft"
        [color]="'white'"
        width="{24}"
        height="{24}"
      />
    </app-button>
    <nav className="flex flex-col bg-red-500">
      <a href="#about" onClick="{toggleSidebar}"> About us</a>
      <a href="#services" onClick="{toggleSidebar}"> Services</a>
      <a href="#faqs" onClick="{toggleSidebar}"> FAQs </a>
    </nav>
  </div>`,
  imports: [LucideAngularModule, ButtonComponent],
})
export class AppMobileComponent {
  @Input() isMenuOpen!: WritableSignal<boolean>;
  constructor(private helper: HelperService) {}

  cn(...inputs: ClassValue[]) {
    return this.helper.cn(inputs);
  }

  toggleMenu() {
    console.log('mobile', this.isMenuOpen());
    this.isMenuOpen?.update((prev) => !prev);
  }
}
