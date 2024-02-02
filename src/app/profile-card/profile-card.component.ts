import { Component, Input, OnInit } from '@angular/core';
import { profile } from '../models/profile.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() profile:profile= {} as profile; 

  constructor() { }

  ngOnInit(): void {
  }

}
