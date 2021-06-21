import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'location',
    pathMatch: 'full',
  },
  {
    path: 'userlist',
    loadChildren: () =>
      import('./userlist/userlist.module').then((m) => m.UserlistPageModule),
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'location',
    loadChildren: () =>
      import('./location/location.module').then((m) => m.LocationPageModule),
  },
  {
    path: 'localidad/:id',
    loadChildren: () =>
      import('./localidad/localidad.module').then((m) => m.LocalidadPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
