import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  deleteCategory(id: number) {
    const res = confirm('you want to delete this category?');
    if (res) {
      this.categoriesService.deleteCategory(id).subscribe(() => {
        this.getCategories();
      });
    }
  }

  createCategory() {
    this.router.navigate(['/category/create']);
  }

  editCategory(id: number) {
    this.router.navigate(['/category/edit', id]);
  }

}
