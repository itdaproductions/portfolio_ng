import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss'],
})
export class CustomerReviewComponent implements OnInit {
  @Input() name: string = '';
  @Input() quote: string = '';

  constructor() {}

  ngOnInit(): void {}
}
