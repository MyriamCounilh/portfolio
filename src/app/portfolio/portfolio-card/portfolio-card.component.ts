import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  panelOpenState = false;

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
  description: string[];
  @Input()
  technologie: string;

  constructor() { }

  ngOnInit(): void {
  }

}
