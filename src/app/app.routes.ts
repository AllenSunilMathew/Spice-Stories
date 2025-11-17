import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Pnf } from './pnf/pnf';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Recipe } from './recipe/recipe';
import { Register } from './register/register';
import { SaveRecipe } from './save-recipe/save-recipe';
import { ViewRecipe } from './view-recipe/view-recipe';

export const routes: Routes = [
    // http://localhost:4200/
    {
        path: "", component: Home, title: 'Spice-Stories -Home'
    },

    // http://localhost:4200/about
    {
        path: "about", component: About, title: 'Spice-Stories -About'
    },
    // http://localhost:4200/contact
    {
        path: "contact", component: Contact, title: 'Spice-Stories -contact'
    },
    // http://localhost:4200/login
    {
        path: "login", component: Login, title: 'Spice-Stories -login'
    },
    // http://localhost:4200/profile
    {
        path: "Profile", component: Profile, title: 'Spice-Stories -Profile'
    },

    // http://localhost:4200/recipes
    {
        path: "recipes", component: Recipe, title: 'Spice-Stories -Recipe'
    },
    // http://localhost:4200/register
    {
        path: "register", component: Register, title: 'Spice-Stories -Register'
    },
    // http://localhost:4200/save-recipe
    {
        path: "save-recipe", component: SaveRecipe, title: 'Spice-Stories -save-recipe'
    },

    // http://localhost:4200/recipe/id/view
    {
        path: "recipe/:id/view", component: ViewRecipe, title: 'Spice-Stories -ViewRecipe'
    },

    // http://localhost:4200/pnf
    {
        path: "**", component: Pnf, title: 'Spice-Stories - 404-pnf'
    },

];
