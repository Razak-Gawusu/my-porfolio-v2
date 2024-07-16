import { Component } from '@angular/core';
import { ButtonComponent } from '../Button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../Icon/Icon.component';
import { SingleProjectComponent } from './singleProject.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ButtonComponent,
    LucideAngularModule,
    IconComponent,
    SingleProjectComponent,
    RouterModule,
  ],
  template: `
    <section class="space-y-8">
      <div class="flex justify-between">
        <div class="space-y-2">
          <h2 class="font-lora text-5xl text-neutral-600">Projects.</h2>
          <p class="text-xl max-w-[430px]">
            Here are some of the projects I've worked on. A collection of both
            client and side projects.
          </p>
        </div>

        <a routerLink="/projects" rout href="">
          <app-button size="lg" variant="ghost" class="self-end"
            >View More <lucide-icon name="move-right" />
          </app-button>
        </a>
      </div>

      <div class="grid md:grid-cols-[2fr_3fr] gap-4 h-[700px]">
        <div class="grid gap-4 rounded-2xl ">
          <app-single-project
            name="Ownkey"
            src="assets/images/mypurplepay-login.webp"
            link="google.com"
          />
          <app-single-project
            name="Ownkey"
            src="assets/images/kreditafrica.webp"
            link="google.com"
          />
        </div>
        <div
          class="bg-neutral-600 rounded-2xl px-16 py-10 flex flex-col justify-between"
        >
          <!-- <app-icon name="OwnkeyIcon" [width]="170" [height]="170" /> -->
          <img src="/assets/icons/ownkey-icon.svg" alt="" class="w-36 h-36" />
          <div class="space-y-2">
            <div class="bg-zinc-200 rounded-lg overflow-hidden p-[5px]">
              <img
                src="assets/images/ownkey.webp"
                alt="hrms"
                class="rounded-lg"
              />
            </div>
            <a href="#" target="_blank" class="text-white">
              <app-button variant="ghost" class="!p-0"
                >Ownkey <lucide-icon [size]="20" name="externalLink"
              /></app-button>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {}
