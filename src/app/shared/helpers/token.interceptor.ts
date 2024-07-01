import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from './models/user';
import { StorageService } from '../services/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    public ApiEnd: Observable<boolean> | undefined;
    
    constructor(
        private router: Router,
        public loadingController: LoadingController,
        public platform: Platform,
        public storage: StorageService,

    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let token: any = this.storage.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token,
                    'Access-Control-Allow-Origin': '*',
                    "content-type": "application/json"
                }
            });
        }
        if (!token) {
            request = request.clone({
                setHeaders: {

                    'Access-Control-Allow-Origin': '*',
                    "content-type": "application/json"
                }
            });
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                //(error);
                if (error.status === 401) {
                    let user: User = this.storage.getUser();
                    if (user) {
                        // this.firebase.getAuthorized();
                        return throwError('401');
                        // this.util.showToast("Please Try Again!");
                    }
                    else {
                        this.router.navigate(['sign-in'], { replaceUrl: true });
                        return throwError('Check your internet connection or refresh your application');
                        // this.util.showToast(error.statusText);
                    }
                    // window.location.reload();

                }
                else {
                    return throwError('Check your internet connection or refresh your application');
                }



            })
        );
    }
}
