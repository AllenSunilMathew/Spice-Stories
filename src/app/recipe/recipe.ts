import { Component, inject, signal } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ApiService } from '../services/api-service';
import { Router } from 'express';

@Component({
  selector: 'app-recipe',
  imports: [Header, Footer],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {
  allRecipes: any = []
  cuisineArray: any = []
  mealTypeArray: any = []
  dummyAllRecipe: any = []

  api = inject(ApiService)
  router = inject(Router)

  ngOnInit() {
    this.getAllRecipes()
  }

  getAllRecipes() {
    this.api.getAllRecipesAPI().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allRecipes=res


        this.dummyAllRecipe = res

        this.allRecipes.forEach((item: any) => {
          !this.cuisineArray.includes(item.cusine) && this.cuisineArray.push(item.cusine)
        })
        console.log(this.cuisineArray);

        const dummyMealArray = this.allRecipes.map((item: any) => item.mealType).flat(Infinity)
        dummyMealArray.forEach((item: any) => {
          !this.mealTypeArray.includes(item.cusine) && this.mealTypeArray.push(item)

        })
        console.log(this.mealTypeArray);

      }


    })
  }

filterRecipe(key:string,value:string){
this.allRecipes=this.dummyAllRecipe.filter((item:any)=>item[key]==value)
}


  // navigateView
  navigateView(recipeId: string) {
    if (sessionStorage.getItem("token")) {
      this.router.navigateByUrl(`/recipe/${recipeId}/view`)
    } else {
      alert("plz login to get access of the recipes ")
    }
  }



}