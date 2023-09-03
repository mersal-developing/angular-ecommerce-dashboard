import { Injectable,inject } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { BACKEND_URL } from "../config/backend-url.factory";

@Injectable({ providedIn: "root" })
export class ApiInterceptor implements HttpInterceptor {
    serverUrl = inject(BACKEND_URL);

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const apiReq = req.clone({ url: `${this.serverUrl}/${req.url}` });
        return next.handle(apiReq);
    }
}
