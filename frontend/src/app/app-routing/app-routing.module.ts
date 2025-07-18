import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
} from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
