import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'powerside';
  message:object;

  constructor(private data: DisplayService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      if(message == "")
        return;

        let entries = [];
        Object.entries(message).forEach( element => {
            entries[element[0]] = element[1];
        });
        this.message = entries;
    })
  }
}
