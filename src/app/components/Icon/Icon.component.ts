import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { HelperService } from '../../utils/helper.service';
import { catchError, of, tap } from 'rxjs';
import { IconNames } from '../../interfaces/icon-names';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class IconComponent implements OnInit {
  @Input() name!: IconNames;
  @Input() width?: number = 24;
  @Input() height?: number = 24;
  @Input() color?: string = '#fff';

  constructor(
    private http: HttpClient,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.loadIcon();
  }

  private loadIcon() {
    const iconPath = `assets/icons/${this.helperService.toKebabCase(
      this.name
    )}.svg`;

    this.http
      .get(iconPath, { responseType: 'text' })
      .pipe(
        tap((svgText) => {
          const svgElement = this.renderer.createElement('span');
          svgElement.innerHTML = svgText;
          const icon = svgElement.querySelector('svg');

          if (icon) {
            this.applyIconStyles(icon);
            this.renderer.appendChild(this.elementRef.nativeElement, icon);
          }
        }),
        catchError((err) => {
          console.error(`Failed to load SVG icon '${this.name}':`, err);
          return of(null);
        })
      )
      .subscribe();
  }

  private applyIconStyles(svgElement: HTMLElement) {
    this.renderer.setAttribute(svgElement, 'color', this.color!);
    this.renderer.setAttribute(svgElement, 'width', String(this.width!));
    this.renderer.setAttribute(svgElement, 'height', String(this.height!));
  }
}
