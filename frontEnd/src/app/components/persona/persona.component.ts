//Aca se van a escribir las funciones que necesite el codigo de HTML (persona.component.html)


import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../services/persona.service';
import { NgForm } from '@angular/forms';
import { Persona } from '../../models/persona';

declare var M: any;

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [ PersonaService ]
})
export class PersonaComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
  }

  addPersona(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.personaService.putPersona(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPersonas();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.personaService.postPersona(form.value)
      .subscribe(res => {
        this.getPersonas();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(res => {
        this.personaService.personas = res as Persona[];
      });
  }

  editPersona(persona: Persona) {
    this.personaService.selectedPersona = persona;
  }

  deletePersona(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.personaService.deletePersona(_id)
        .subscribe(res => {
          this.getPersonas();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }

}

