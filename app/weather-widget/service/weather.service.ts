import { Injectable } from '@angular/core';

@Injectable()

export class WeatherService { 
    getCurrentLocation(): [number,number] {
        if (navigator.geolocation != null) {
            navigator.geolocation.getCurrentPosition(pos => {
                console.log("Position: ", pos.coords.latitude, ",", pos.coords.longitude);
                return [pos.coords.latitude, pos.coords.longitude]
            },
            err => {
                console.log(err)
            })
        } else {
            console.error("Geolocation is not available.");
            return [0,0]
        }
    }
}