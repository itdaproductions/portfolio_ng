import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./content/base/base.module').then((m) => m.BaseModule),
  },
  {
    path: 'error/:code', // Route for error with a specific code
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '/error/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
