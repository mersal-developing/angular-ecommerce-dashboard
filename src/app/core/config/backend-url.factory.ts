
import { InjectionToken } from '@angular/core';
import { BackendUrlService } from '../services/backend-url.service';

export const BACKEND_URL = new InjectionToken<string>('backendUrl');

export function backendUrlFactory(backendUrlService: BackendUrlService) {
  return backendUrlService.generateBackendUrl();
}
