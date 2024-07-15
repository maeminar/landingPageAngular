import { Component } from '@angular/core';
import { VideoComponent } from "../video/video.component";
import { TitleComponent } from "../title/title.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { BenefitsComponent } from "../benefits/benefits.component";
import { TestimonyComponent } from "../testimony/testimony.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, BenefitsComponent, TestimonyComponent, VideoComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
