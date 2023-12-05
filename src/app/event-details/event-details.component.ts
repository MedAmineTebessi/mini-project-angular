import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evennement } from 'src/models/evennement';
import { EvennementService } from 'src/services/evennement.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{

  constructor(private ac : ActivatedRoute , private eventService:EvennementService, private route : Router){}

  eventID !: number;
  currentEvent !: Evennement;

  ngOnInit(): void {
    
    this.ac.params.subscribe(params => {
      
      this.eventID = +params['id']; 
      console.log(this.eventID);
    });

    this.eventService.getEvennementById(this.eventID).subscribe({
      next:(data)=> this.currentEvent=data,
      error:(err)=>console.log(err)
    })
  }

  handleLogout() {
    console.log('Déconnexion effectuée');
    this.route.navigate(['/authentification']);
  }

}
