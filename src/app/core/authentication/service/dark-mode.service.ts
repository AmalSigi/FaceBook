import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() {


const currentDarkMode =localStorage.getItem('dark_mode')
if(currentDarkMode!=null){
  this.dark.next(JSON.parse(currentDarkMode))
}
   }
   private dark:BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false)


public toogleCurrentDarkMidea():void{
localStorage.setItem('dark_mode',JSON.stringify(!this.dark.value))
this.dark.next(!this.dark.value)
}

public getCurrentDarkMode():Observable<boolean>{
  return this.dark.asObservable();
}

}
