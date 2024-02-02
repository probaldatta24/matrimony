import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(){
  }
}
