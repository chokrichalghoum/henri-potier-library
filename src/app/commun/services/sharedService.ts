import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  public search$ = new EventEmitter<string>();
}
