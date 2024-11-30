import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PasseiosComponent } from './passeios/passeios.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component'; // Adicionando a rota do carrinho
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'carrinho', component: CarrinhoComponent },  
  { path: 'contato', component: ContatoComponent },// Rota para a página Carrinho
];
