import { Injectable } from "@angular/core";

@Injectable()
export class PlainLoggerService {
    log(message: string) {
        console.log(`${message} - [PLANO]`);
    }

    error(message: string) {
        console.error(`ERROR: ${message} - [PLANO]`);
    }
}