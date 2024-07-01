import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<main><h1>Hello world</h1></main>`,
})
export class AppComponent {
  title = 'my-portfolio';
}
