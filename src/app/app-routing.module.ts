import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children:
      [
        {
          path: 'home',
          loadChildren: () =>
            import('./modules/home/home.module').then(m => m.HomeModule)
        }
      ]
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./modules/shop/shop.module').then(m => m.ShopModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
