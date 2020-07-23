import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DisplayService } from '../display.service';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  message:object;
  isSubmitDisplayed:boolean

  formMagasin = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      statut: new FormControl(''),
      sexe: new FormControl('')
  });

  constructor(private data: DisplayService) { }

  informationsControl = new FormControl('');

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.formMagasin.valueChanges.subscribe( values => {
        if(Object.values(values).some(val => val == "")){
          this.isSubmitDisplayed = false;
        }else{
          this.isSubmitDisplayed = true;
        }
    })
  }

  sendInformations() {
    /* Transforme le data en json */
    this.data.changeData(this.formMagasin.value);
    this.informationsControl.reset();
  }

}
