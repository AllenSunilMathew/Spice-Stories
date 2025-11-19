import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-recipe',
  imports: [Header, Footer],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {

}
