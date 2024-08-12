import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/Button';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent, LucideAngularModule],
  template: `<div class="max-w-[670px] mx-auto grid gap-8 py-16 md:py-36 ">
    <div class="grid gap-4">
      <h2 class="font-lora text-5xl leading-[60px]">
        Hey I'm Gawusu - a <span class="text-teal-700">fullstack</span> engineer
        with experience of crafting innovative web projects.
      </h2>

      <p>
        I build things with React, Vue and Angular with their ecosystem of
        tooling. Before specializing in the frontend. I was a full-stack
        developer putting together enterprise-scale websites. I enjoy
        challenging Chrome and Satari to a battle of wits
        <em>(or patience)</em>, and architecting simple solutions to complex
        problems.
      </p>

      <p>
        I've worked with a wide range of teams, from startups to Fortune 500
        companies; typically in a principal technical role. Usually I partner
        with agencies, design studios, or startups to provide sprints or tocused
        dev work.
      </p>

      <p>
        On a personal note... I live in Orlando FL with my wife and daughter. I
        want to sav that I'm a big fan of the outdoors and that I like long
        walks on the beach; but instead my passion Is programming so I'm usually
        just at my desk.
      </p>
    </div>

    <div>
      <h3 class="font-lora font-semibold">Availability</h3>
      <div>
        <p>
          I'm interested in colaboratina with beoole Who are buildina creative
          websites interactive experiences, or bespoke interraces - especiallv
          those with grapnics so intense that my GPU catches fire 0.
        </p>
        <p>
          Whlle awas have some sort or ongoina work. I'm oben to discussina new
          opportunities. If you have a project in mind, don't hesitate to reach
          out.
        </p>
      </div>
    </div>

    <div>
      <app-button class="px-12 w-max" variant="secondary">
        <span class="flex gap-2 items-center">
          <lucide-icon name="send" color="white" [size]="16"></lucide-icon>
          Let's chat
        </span>
      </app-button>
    </div>
  </div>`,
})
export class AboutPage {}
