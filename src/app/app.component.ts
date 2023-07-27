import { Component, OnInit, effect } from '@angular/core';
import { DarkModeService } from '@autservice/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly mode: DarkModeService) {
    effect(() => (this.darkMode = this.mode.dark()));
  }
  title = 'Facebook';
  public darkMode!: boolean;
  public darkModelocal = localStorage.getItem('dark_mode');
  ngOnInit(): void {
    if (this.darkModelocal == 'false') {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }
  }
}
