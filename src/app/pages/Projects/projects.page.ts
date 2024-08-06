import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/Button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import { ProjectService } from '../../services/projects.service';
import { IProject } from '../../interfaces';
import { AltSingleProjectComponent } from '../../components/Projects/altProject.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `<div class="grid gap-8 py-16 md:py-36">
    <div class="grid gap-4 max-w-md m-auto">
      <h2 class="font-lora text-5xl leading-[60px] text-center">Projects</h2>
      <p class="text-center">
        Here are some of the projects I've worked on. A collection of both
        client and side projects.
      </p>
    </div>

    <div class="grid gap-8 md:gap-12 lg:grid-cols-2">
      <app-alt-single-project
        *ngFor="let project of projectList"
        [name]="project.name"
        [src]="project.imgSrc"
        [link]="project.link"
        [techStack]="project.techStack"
      />
    </div>
  </div>`,
  imports: [
    ButtonComponent,
    LucideAngularModule,
    AltSingleProjectComponent,
    CommonModule,
  ],
})
export class ProjectsPage {
  projectList: IProject[] = [];
  constructor(mockService: ProjectService) {
    this.projectList = mockService.projects;
  }
}
