import { Injectable, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class BackendUrlService {
  constructor(@Optional() @Inject(DOCUMENT) private document: Document) {}

  generateBackendUrl(): string {
    const baseUrl = environment.production ? this.document.location.origin : environment.serverUrl;
    return `${baseUrl}/api`;
  }
}
