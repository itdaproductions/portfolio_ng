import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ErrorComponent {
  errorCode: number = 404;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the error code from the route parameters
    this.route.params.subscribe((params) => {
      this.errorCode = +params['code'] || 500; // Default to 500 if no code provided
    });
  }
}
