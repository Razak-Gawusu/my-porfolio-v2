import { Routes } from '@angular/router';
import { HomePage, ProjectsPage, AboutPage } from './pages';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home | GR' },
  { path: 'about', component: AboutPage, title: 'About | GR' },
  { path: 'projects', component: ProjectsPage, title: 'Projects | GR' },
];
