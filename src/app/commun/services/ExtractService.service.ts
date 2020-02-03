import { Injectable } from '@angular/core';

@Injectable()
export class ExtractService {
  /**
   *
   * @param text
   * Permet de retourner uniquement 200 caractere et afficher . . . si la taille est superieure
   */
  extractDescription(text: string): string {
    if (text.length > 100) {
      return text.substr(0, 100).concat('. . . ');
    } else {
      return text;
    }
  }
}
