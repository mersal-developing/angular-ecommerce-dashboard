import { Injectable, inject } from "@angular/core";
import { UtilitiesService } from "src/app/shared/services/utilities.service";

@Injectable({ providedIn: "root" })
export class JwtService {
  utilitiesService = inject(UtilitiesService);
  
  getToken(): string | null {
    return this.utilitiesService.getLocalStorageItem("jwtToken");
  }

  saveToken(token: string): void {
    this.utilitiesService.setLocalStorageItem("jwtToken", token);
  }

  destroyToken(): void {
    this.utilitiesService.removeLocalStorageItem("jwtToken");
  }
}
