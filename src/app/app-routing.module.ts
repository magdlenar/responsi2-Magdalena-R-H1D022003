import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', 
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'races', 
    loadChildren: () => import('./radiator/radiator.module').then(m => m.RadiatorPageModule),
  },
  {
    path: 'race-details/:id', 
    loadChildren: () => import('./race-details/race-details.module').then(m => m.RaceDetailsPageModule)
  },
  {
    path: 'add-race',
    loadChildren: () => import('./add-race/add-race.module').then(m => m.AddRacePageModule),
  },
  {
    path: 'edit-race/:id', 
    loadChildren: () => import('./edit-race/edit-race.module').then(m => m.EditRacePageModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Menggunakan strategi preload untuk memuat semua modul lebih cepat.
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
