import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { profile } from '../models/profile.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'Matrimony';
  screenWidth!: number;
  profiles: profile[] = [];
  profile: profile = {} as profile;
  slidesPerView: number = 4.5
  subscription: Subscription[] = []

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateSwiperItem();
  }

  constructor(private profileService: ProfileService, private _router: Router) { }

  ngOnInit() {
    this.subscription.push(this.profileService.getAllProfiles().subscribe((res: profile[]) => {
      this.profiles = res
    }))
  }

  updateSwiperItem() {
    this.screenWidth = window.innerWidth
    if (this.screenWidth <= 480) {
      this.slidesPerView = 1.5
    } else if (this.screenWidth <= 768) {
      this.slidesPerView = 2.5
    } else if (this.screenWidth <= 992) {
      this.slidesPerView = 3.5
    } else {
      this.slidesPerView = 4.5
    }
  }

  onClickProfileCard(id: string) {
    console.log(id)
    this._router.navigate(['profile-details', id])
  }

  noButtonClick(event: Event) {
    event.stopPropagation();
  }

  ngOnDestroy(){
    this.subscription.forEach((s)=>s.unsubscribe)
  }

}
