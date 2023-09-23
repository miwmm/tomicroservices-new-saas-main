import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InteractionMicroSolutionsComponent } from './interaction/interaction-micro-solutions/interaction-micro-solutions.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'location',
    pathMatch: 'full',
  },
  {
    path: 'interaction',
    loadChildren: () =>
      import('./interaction/interaction.module').then(
        (interaction) => interaction.InteractionModule
      ),
  },
  {
    path: 'interaction-graph',
    loadChildren: () =>
      import(
        './interaction-graph-micro-solutions/interaction-graph-micro-solutions.module'
      ).then(
        (interactionGraph) =>
          interactionGraph.InteractionGraphMicroSolutionsModule
      ),
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
