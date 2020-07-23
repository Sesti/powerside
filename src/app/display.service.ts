import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  private labelSource = new BehaviorSubject('');
  currentLabel = this.labelSource.asObservable();

  constructor() {
    this.initChangeLabel();
  }

  changeData(data: object) {
    this.messageSource.next(data)
  }

  initChangeLabel() {
    const labels = [
      "Grande Ventes D'entrepôt",
      "Ce Samedi",
      "Ne ratez pas votre chance"
    ]
    let counter = 0;
    setInterval( () => {
      this.labelSource.next(labels[counter]);
      counter++;
      if (counter >= labels.length) {
        counter = 0;
      }
    }, 10000)
  }
}
