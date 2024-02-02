import { Component, Input, OnInit } from '@angular/core';
import { profile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],

})
export class RecommendationsComponent implements OnInit {
  profile: profile = {} as profile;
  allProfiles: profile[] = [];
  currentProfileIndex = 0;

  constructor(private profileService: ProfileService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.profileService.getAllProfiles().subscribe((res) => {
      this.allProfiles = res
      this.profile = res[0]
    })
  }

  swipeLeft(message: string) {
    this.snackBar.open(message, 'Close', { duration: 1000 });
    this.showNextProfile()
    this.triggerAnimation('left');
  }

  swipeRight(message: string) {
    this.snackBar.open(message, 'Close', { duration: 1000 });
    this.showNextProfile();
    this.triggerAnimation('right');
  }

  shortlist(message: string) {
    this.snackBar.open(message, 'Close', { duration: 1000 });
    this.showNextProfile();
    this.triggerAnimation('left');
  }

  showNextProfile() {
    if (this.currentProfileIndex < this.allProfiles.length - 1) {
      this.currentProfileIndex = this.currentProfileIndex + 1
      this.profile = this.allProfiles[this.currentProfileIndex]
    } else {
      this.currentProfileIndex = 0
      this.profile = this.allProfiles[this.currentProfileIndex]
    }
  }
  triggerAnimation(side: string) {
    const boxElement = document.querySelector('.slide_box');
    if (side === 'left') {
      boxElement?.classList.add('animate__animated', 'animate__rotateOutUpLeft', 'z-index');
      boxElement?.addEventListener('animationend', () => {
        boxElement?.classList.remove('animate__animated', 'animate__rotateOutUpLeft', 'z-index');
      });
    } else {
      boxElement?.classList.add('animate__animated', 'animate__rotateOutUpRight', 'z-index');
      boxElement?.addEventListener('animationend', () => {
        boxElement?.classList.remove('animate__animated', 'animate__rotateOutUpRight', 'z-index');
      });
    }

  }

}
