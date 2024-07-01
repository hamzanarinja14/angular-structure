import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/login',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicPageModule),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivatePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
