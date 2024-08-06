import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeroComponent,
  ButtonComponent,
  SkillsComponent,
  ProjectsComponent,
} from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<div class="grid py-16 md:py-36 gap-32 md:gap-48">
    <app-hero />
    <app-skills />
    <app-projects />
  </div>`,
  imports: [
    ButtonComponent,
    LucideAngularModule,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
})
export class HomePage {}
