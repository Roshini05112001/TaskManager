

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { DeletedTasksComponent } from './deleted-tasks/deleted-tasks.component';
import { ImportantTasksComponent } from './important-tasks/important-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-tasks', pathMatch: 'full' },
  { path: 'my-tasks', component: MyTasksComponent },
  { path: 'completed-tasks', component: CompletedTasksComponent },
  { path: 'deleted-tasks', component: DeletedTasksComponent },
  { path: 'important-tasks', component: ImportantTasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

