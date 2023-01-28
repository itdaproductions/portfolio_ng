import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          ),
      },
      {
        path: '**',
        redirectTo: '/error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
