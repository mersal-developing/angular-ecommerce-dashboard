import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MethodType } from '../models';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    http = inject(HttpClient);

    request<T>(
        method: MethodType,
        path: string,
        params?: Object,
        body?: any
    ): Observable<T> {
        const options = this.createHttpParamsFromObject(params);

        switch (method) {
            case 'GET':
                return this.http.get<T>(path, { params: options });
            case 'POST':
                return this.http.post<T>(path, body);
            case 'PUT':
                return this.http.put<T>(path, body, { params: options });
            case 'PATCH':
                return this.http.patch<T>(path, body, { params: options });
            case 'DELETE':
                return this.http.delete<T>(path);
            default:
                throw new Error('Invalid HTTP method');
        }
    }

    createHttpParamsFromObject(obj: any) {
        let params = new HttpParams();

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                params = params.set(key, obj[key].toString());
            }
        }

        return params;
    }
}