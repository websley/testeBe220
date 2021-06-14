import { WorkoutsService } from './../../services/workouts.service';
import { ProfileService } from './../../services/profile.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slides') slides: IonSlides;
  public profile: any;
  public workouts: any[] = [];
  public index_slides: any = 0;

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


  /**
   * Seta o index atual do slider
   */
  async getIndex() {
    this.index_slides = await this.slides.getActiveIndex();
  }

}
