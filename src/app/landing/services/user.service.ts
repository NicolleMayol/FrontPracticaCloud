import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): Observable<any[]> {
    const lambdaUrl = 'YOUR_LAMBDA_URL'; // Replace with your Lambda URL
    return new Observable<any[]>(observer => {
      fetch(lambdaUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
