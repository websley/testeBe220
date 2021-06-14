import { WorkoutsService } from './../../services/workouts.service';
import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profile: any;
  public workouts: any[] = [];

  // Configuração do slider
  public sliderConfig = {
    spaceBetwenn: 4,
    centeredSlides: false,
    slidesPerView: 1.4,
  }

  constructor(
    private profileService: ProfileService,
    private worksService: WorkoutsService
  ) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
    this.workouts = this.worksService.getWorkouts();
  }

}
