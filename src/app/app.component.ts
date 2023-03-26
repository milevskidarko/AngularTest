import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMovies = false;
  showSeries = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (this.router.url.includes('/movies')) {
        this.showMovies = true;
        this.showSeries = false;
      } else if (this.router.url.includes('/series')) {
        this.showSeries = true;
        this.showMovies = false;
      } else {
        this.showMovies = false;
        this.showSeries = false;
      }
    });
  }
}
