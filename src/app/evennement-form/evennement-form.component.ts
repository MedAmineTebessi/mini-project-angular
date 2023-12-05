import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evennement } from 'src/models/evennement';
import { EvennementService } from 'src/services/evennement.service';

@Component({
  selector: 'app-evennement-form',
  templateUrl: './evennement-form.component.html',
  styleUrls: ['./evennement-form.component.css']
})
export class EvennementFormComponent {

  eventForm: FormGroup;

  constructor(private fb : FormBuilder,  private evennementService : EvennementService , private route : Router){
    this.eventForm = this.fb.group({
      nom: ['', Validators.required],
      photo: ['', Validators.required],
      prix: [null, [Validators.required, Validators.min(0)]],
      date: [null, Validators.required],
      estvalide: [false],
     
    });
  }
  goToHome() {
    this.route.navigate(['/home']);
  }
  handleLogout() {
    console.log('Déconnexion effectuée');
    this.route.navigate(['/authentification']);
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const formData: Evennement = this.eventForm.value;

      this.evennementService.addEvennement(formData).subscribe(
       {
        next:()=>{
          console.log("evennement ajoutée avec succés");
          this.route.navigate(['/home']);
      },
        error:(err)=>console.log(err)
       }
      );
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

 



}
