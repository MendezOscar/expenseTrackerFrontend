import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CreateCategoriesComponent } from './features/create-categories/create-categories.component';
import { EditCategoriesComponent } from './features/edit-categories/edit-categories.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'category/create', component: CreateCategoriesComponent},
  { path: 'category/edit/:id', component: EditCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
