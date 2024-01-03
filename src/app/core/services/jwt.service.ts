import { Injectable, inject } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services";

@Injectable({ providedIn: "root" })
export class JwtService {
  localStorageService = inject(LocalStorageService);
  
  getToken(): string | null {
    return this.localStorageService.getValue("jwtToken");
  }

  saveToken(token: string): void {
    this.localStorageService.setValue("jwtToken", token);
  }

  destroyToken(): void {
    this.localStorageService.removeValue("jwtToken");
  }
}
