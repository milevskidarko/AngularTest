import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  seriesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getPopularTVSeries().subscribe((response) => {
      this.seriesList = response.results;
    });
  }
}
