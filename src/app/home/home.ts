import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterLink } from "@angular/router";
import { ApiService } from '../services/api-service';
import { log } from 'console';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // property
allRecipes:any=[]
api=inject(ApiService)
// constructors

// lifecycle








// user defined func
getAllRecipes(){
  this.api.getAllRecipesAPI().subscribe((res:any)=>{
    this.allRecipes=res.slice(0,0)
    console.log(this.allRecipes);
    
  })
}
}
