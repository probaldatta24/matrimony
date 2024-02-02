import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { profile } from '../models/profile.model';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  profileId!:string;
  profile:profile= {} as profile;
  currentSlideIndex:number = 1;
  
  constructor(private profileService:ProfileService, private _activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.profileId = this._activatedRoute.snapshot.paramMap.get('id')!;
    if(this.profileId){
      this.profileService.getItemById(this.profileId).subscribe((res:profile)=>{
        this.profile = res
      })
    }
  }
  onSlideChange(e: any) {
    this.currentSlideIndex = e?.detail?.[0]?.activeIndex+1;
    console.log(this.currentSlideIndex);
  }



}
