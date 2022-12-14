import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFindComponent } from './not-find/not-find.component';

const routes: Routes = [
  { path: "produtos", loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "" , redirectTo: "produtos", pathMatch: "full" },
  { path: 'cart', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'computers', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'contact', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: "**", component: NotFindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
