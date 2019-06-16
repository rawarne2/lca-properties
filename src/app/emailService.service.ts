import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// addHero (hero: Hero): Observable<Hero> {
//     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//       .pipe(
//         catchError(this.handleError('addHero', hero))
//       );
//   }

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain;charset=UTF-8' })
};

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    private emailUrl = 'http://localhost:8080/send-mail';  // URL to web api

    constructor(private http: HttpClient) { }

    sendMaintenanceRequest(message: String): void {
        this.http.post<String>(this.emailUrl, message, httpOptions).subscribe(email => email)
    }
}