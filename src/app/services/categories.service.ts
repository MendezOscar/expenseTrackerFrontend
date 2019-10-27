import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrl = 'https://localhost:5001/api/category';

  constructor( private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryById(id: number) {
    return this.http.get<Category>(this.apiUrl + '/' + id);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCategory(category: Category){
    return this.http.post<Category>(this.apiUrl, category);
  }

  editCategory(category: Category){
    return this.http.put<Category>(this.apiUrl + '/' + category.Id, category);
  }

}
