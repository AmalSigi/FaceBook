import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '@autservice/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(  private readonly mode: DarkModeService){}
  title = 'Facebook';
  public darkMode!:boolean 
  public darkModelocal = localStorage.getItem('dark_mode');
  ngOnInit(): void {
  this.mode.getCurrentDarkMode().subscribe(value=>{this.darkMode=value})
  if(this.darkModelocal=="false"){
    this.darkMode=false
  }
  else{
    this.darkMode=true
  }
  }


}
