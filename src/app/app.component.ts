import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { VideoComponent } from './video/video.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TitleComponent, VideoComponent, CarouselComponent, BenefitsComponent, TestimonyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
