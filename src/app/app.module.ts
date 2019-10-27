import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CreateCategoriesComponent } from './features/create-categories/create-categories.component';
import { EditCategoriesComponent } from './features/edit-categories/edit-categories.component';
import { HomeComponent } from './features/home/home.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreateCategoriesComponent,
    EditCategoriesComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
