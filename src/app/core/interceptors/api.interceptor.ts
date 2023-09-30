import { Injectable, inject } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { BACKEND_URL } from "../config/backend-url.factory";
import { LoadingBarService } from "src/app/shared/services";
import { finalize } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class ApiInterceptor implements HttpInterceptor {
    serverUrl = inject(BACKEND_URL);
    loadingBarService = inject(LoadingBarService);

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const apiReq = req.clone({ url: `${this.serverUrl}/${req.url}` });
        this.loadingBarService.show();

        if (req.url.includes('/assets/')) {
            return next.handle(req)
        }

        return next.handle(apiReq).pipe(
            finalize(() => {
                this.loadingBarService.hide();
            })
        );
    }
}
