import { Injectable, inject } from "@angular/core";
import { Event, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Injectable({ providedIn: "root" })
export class RoutingService {
    router = inject(Router);
    private _history: string[] = [];

    get history(): string[] {
        return this._history;
    }

    get backLink(): string {
        const previousPageIndex = this.history.length - 2;
        return this.history[previousPageIndex];
    }

    constructor() {
        this.router.events.
            pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: Event) => {
                if (event instanceof NavigationEnd) {
                    this.history.push(event.url);
                }
            })
    }

    navigateBackClicked() {
        this.router.navigateByUrl(this.backLink);
    }
}