import { Component } from '@angular/core';
import { EnteteComponent } from "../header/header.component";
import { VideoComponent } from '../benefits/benefits.component';
import { VisuelsComponent } from '../visuels/visuels.component';
import { AvantagesComponent } from "../testimony/testimony.component";
import { TemoignagesComponent } from "../title/title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, VideoComponent, TitleComponent, BenefitsComponent, TestimonyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}