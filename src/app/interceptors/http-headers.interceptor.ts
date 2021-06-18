import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'dcbe3f0966mshe5f62ee087895e6p13a2edjsnbf1571a93d26',
	            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '0e07dc06a603497099ad7c9d6891c880',
            }
        });
        return next.handle(req);
    }
}