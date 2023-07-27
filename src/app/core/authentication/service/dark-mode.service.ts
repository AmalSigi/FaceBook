import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  constructor() {
    const currentDarkMode = localStorage.getItem('dark_mode');
    if (currentDarkMode != null) {
      this.dark.set(JSON.parse(currentDarkMode));
    }
  }
  public dark = signal<boolean>(false);
  public toogleCurrentDarkMode(): void {
    localStorage.setItem('dark_mode', JSON.stringify(!this.dark()));
    this.dark.set(!this.dark());
  }

  // public getCurrentDarkMode(): Observable<boolean> {
  //   return this.dark;
  // }
}
