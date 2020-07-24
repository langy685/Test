import { Injectable } from '@angular/core';

@Injectable()
export class InvoiceToolsService {

  constructor() { }

  getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }

  getRandomString() {
    return Math.random().toString(36).substring(5);
  }
}
