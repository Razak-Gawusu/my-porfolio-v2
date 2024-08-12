import { Injectable } from '@angular/core';
import { IProject } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projects: IProject[] = [
    {
      id: 1,
      name: 'Kreditafrica',
      link: 'https://kreditafrica.enyata.com',
      imgSrc: 'assets/images/kreditafrica-auth.png',
      techStack: ['React', 'Tailwind', 'Vitest'],
      description: 'lorem init',
    },
    {
      id: 2,
      name: 'My Purple Pay',
      link: 'https://purple-vest.enyata.com',
      imgSrc: 'assets/images/mypurplepay-auth.png',
      techStack: ['React', 'Tailwind', 'Vitest'],
      description: 'lorem init',
    },
    {
      id: 3,
      name: 'Ownkey',
      link: 'https://ownkey.com',
      imgSrc: 'assets/images/ownkey-site.png',
      techStack: ['NextJs', 'Tailwind', 'Google Map API', 'Firebase'],
      description: 'lorem init',
    },
  ];
}
