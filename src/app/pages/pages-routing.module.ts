import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent, data: { title: 'Artigos' } },
  { path: 'article/:id', component: ArticleComponent, data: { title: 'Editar artigo' } },
  { path: 'article', component: ArticleComponent, data: { title: 'Novo artigo' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: '', redirectTo: 'login' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PagesRoutingModule { }