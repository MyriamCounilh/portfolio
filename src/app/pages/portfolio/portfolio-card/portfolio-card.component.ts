import {Component, Input, OnInit} from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  subTitle: string;
  @Input()
  link: string;
  @Input()
  image: string;
  @Input()
  imageAlt: string;
  @Input()
  descriptions: string[];
  @Input()
  technologies: string[];
  @Input()
  badge: number;

  constructor() {  
  }

  ngOnInit(): void {
  }
}
