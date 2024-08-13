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
      description:
        'Software to provide innovative credit-related data and solutions to organizations and individuals.',
    },
    {
      id: 4,
      name: 'HRMS',
      link: 'https://ghana-hrms.enyata.com/',
      imgSrc: 'assets/images/hrms-dashboard.webp',
      techStack: ['React', 'ChakraUI', 'GraphQL'],
      description:
        'Software to manage Human resources in a company from Hiring, to Assessments, to Employee management.',
    },
    {
      id: 2,
      name: 'My Purple Pay',
      link: 'https://purple-vest.enyata.com',
      imgSrc: 'assets/images/mypurplepay-auth.png',
      techStack: ['React', 'Tailwind', 'Vitest'],
      description: `Managing individual's and organizations' savings, thrift communities, and loans.`,
    },
    {
      id: 3,
      name: 'Ownkey',
      link: 'https://ownkey.com',
      imgSrc: 'assets/images/ownkey-site.png',
      techStack: ['NextJs', 'Tailwind', 'Google Map API', 'Firebase'],
      description:
        'Ownkey is an online platform that allows users to find, rent, buy, and sell real estate properties in Accra.',
    },
    {
      id: 5,
      name: 'Portfolio',
      link: '#',
      imgSrc: 'assets/images/portfolio-site.png',
      techStack: ['Angular', 'Tailwind', 'SCSS'],
      description: `The site you're currently scrolling.`,
    },
  ];
}
