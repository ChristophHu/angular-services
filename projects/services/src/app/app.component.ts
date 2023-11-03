import { Component } from '@angular/core'
import { GeolocationService } from './core/services/geolocation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.getGeoLocation()
  }

  getGeoLocation() {
    this.geolocationService.getCurrentPosition().subscribe({
      next: (position) => {
        console.log('Latitude:', position.coords.latitude)
        console.log('Longitude:', position.coords.longitude)
      },
      error: (error) => {
        console.error('Error getting geolocation:', error)
      },
    })
  }
}
