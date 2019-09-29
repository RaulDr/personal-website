import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule(
  {
    imports: [RouterModule.forRoot(appRoutes, {
        enableTracing: false
      }
    )],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
