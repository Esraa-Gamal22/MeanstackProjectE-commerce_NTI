import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  constructor(private global : GlobalService){
    if(localStorage.getItem("token")) this.global.isLogin = true
  }
}
