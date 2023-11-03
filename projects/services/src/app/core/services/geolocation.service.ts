import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  getCurrentPosition(): Observable<any> {
    return new Observable((observer) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position)
            observer.complete()
          },
          (error) => {
            observer.error(error)
          }
        )
      } else {
        observer.error('Geolocation is not available in this browser.')
      }
    })
  }
}
