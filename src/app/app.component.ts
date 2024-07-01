import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div>
    <header class="">
      <div class="container">Header</div>
    </header>
    <main>
      <div class="container">Main</div>
    </main>
  </div>`,
})
export class AppComponent {
  title = 'my-portfolio';
}
