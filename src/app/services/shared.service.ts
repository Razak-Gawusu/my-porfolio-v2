import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private isOpenSource = new BehaviorSubject<boolean>(true);
  isSidebarOpen = this.isOpenSource.asObservable();
  constructor() {}

  toggleSidebar() {
    const isOpen = this.isOpenSource.value;
    this.isOpenSource.next(!isOpen);
  }
}
