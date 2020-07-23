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
    // labels à être affichés
    const labels = [
      "Grande Ventes D'entrepôt",
      "Ce Samedi",
      "Ne ratez pas votre chance"
    ]
    let counter = 1;

    // Change le label à chaque x secondes
    setInterval( () => {
      this.labelSource.next(labels[counter]);
      counter++;
      if (counter >= labels.length) {
        counter = 0;
      }
    }, 10000);

    // Défini le texte de départ
    this.labelSource.next(labels[0]);
  }
}
