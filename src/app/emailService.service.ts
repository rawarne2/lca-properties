import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain;charset=UTF-8' })
};

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    // private emailUrl = 'http://localhost:3000/send-mail';  // URL to web api
    private emailUrl = 'https://lca-email.herokuapp.com/'
    constructor(private http: HttpClient) { }

    sendMaintenanceRequest(message: Object): void {
        this.http.post<String>(this.emailUrl, message).subscribe(email => email)
        console.log('email sent', message)
    }
}