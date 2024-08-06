import { Component } from '@angular/core';
import { ButtonComponent } from '../Button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../Icon/Icon.component';
import { SingleProjectComponent } from './singleProject.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProject } from '../../interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ButtonComponent,
    LucideAngularModule,
    IconComponent,
    SingleProjectComponent,
    RouterModule,
    CommonModule,
  ],
  template: `
    <section class="space-y-8">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="space-y-2">
          <h2 class="font-lora text-5xl text-neutral-800">Projects.</h2>
          <p class="text-xl max-w-[430px]">
            Here are some of the projects I've worked on. A collection of both
            client and side projects.
          </p>
        </div>

        <a routerLink="/projects" rout href="">
          <app-button size="lg" variant="ghost" class="self-end" class="!px-0"
            >View More <lucide-icon name="move-right" />
          </app-button>
        </a>
      </div>

      <div class="grid md:grid-cols-[2fr_3fr] gap-4 h-[700px]">
        <div class="grid gap-4 rounded-2xl ">
          <app-single-project
            *ngFor="let project of projectList"
            [name]="project.name"
            [src]="project.imgSrc"
            [link]="project.link"
          />
        </div>
        <div
          class="bg-teal-700 rounded-2xl p-4 md:px-16 md:py-10 flex flex-col justify-between"
        >
          <img
            src="/assets/icons/ownkey-icon.svg"
            alt=""
            class="w-16 md:w-36 h-16 md:h-36"
          />
          <div class="space-y-2">
            <div class="bg-zinc-200 rounded-lg overflow-hidden p-[5px]">
              <img
                [src]="mainProject.imgSrc"
                [alt]="mainProject.name"
                class="rounded-lg"
              />
            </div>
            <a [href]="mainProject.link" target="_blank" class="text-white">
              <app-button variant="ghost" class="!p-0"
                >{{ mainProject.name }}
                <lucide-icon [size]="20" name="externalLink"
              /></app-button>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projectList: IProject[] = [
    {
      id: 1,
      name: 'Kreditafrica',
      link: 'https://kreditafrica.enyata.com',
      imgSrc: 'assets/images/kreditafrica.webp',
    },
    {
      id: 2,
      name: 'My Purple Pay',
      link: 'https://purple-vest.enyata.com',
      imgSrc: 'assets/images/mypurplepay-login.webp',
    },
  ];

  mainProject: IProject = {
    id: 1,
    name: 'Ownkey',
    link: 'https://ownkey.com',
    imgSrc: 'assets/images/ownkey.webp',
  };
}
