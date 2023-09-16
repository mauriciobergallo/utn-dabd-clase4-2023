import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    log(message: string) {
        const timeAsString = new Date().toLocaleTimeString();
        console.log(`${message} - [${timeAsString}]`);
    }

    error(message: string) {
        const timeAsString = new Date().toLocaleTimeString();
        console.log(`ERROR: ${message} - [${timeAsString}]`);
    }
}