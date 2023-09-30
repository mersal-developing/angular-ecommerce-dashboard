import { Injectable } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingBarService {
    private _show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _mode$: BehaviorSubject<ProgressBarMode> = new BehaviorSubject<ProgressBarMode>('indeterminate');
    
    get show$(): Observable<boolean> {
        return this._show$.asObservable();
    }

    get mode$(): Observable<ProgressBarMode> {
        return this._mode$.asObservable();
    }

    show(): void {
        this._show$.next(true);
    }

    hide(): void {
        this._show$.next(false);
    }

    /**
    * Set the mode
    *
    * @param value
    */
    setMode(value: ProgressBarMode): void {
        this._mode$.next(value);
    }

}