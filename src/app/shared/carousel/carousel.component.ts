import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface CarouselReview {
  name: string;
  quote: string;
  img: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() title: string = '';
  @Input() reviews: CarouselReview[] = [
    {
      name: 'Adriano Abreu Andrade',
      quote:
        'One of the most perfectionist artists that I ever had the pleasure to work with. The attention to detail and the quality of the work is second to none.',
      img: '',
    },
    {
      name: 'Tomás Dias',
      quote:
        "Not only is he a masterful artist, but also a very deep, cultured, extremely creative, kind and loving person. His works are a peek into his great mind, and it can range from dark and twisted to colorful and epic. He is not afraid to explore the many shades of art, and he always does it with great expertise. Hands down one of the most complete artists I've ever seen.",
      img: '',
    },
    {
      name: 'Albertina Freitas',
      quote:
        "When I saw the finished piece, I was amazed by it's precision, but above all, by the transmission of emotions that only true artists can convey to us.",
      img: '',
    },
  ];

  currentIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }
}
