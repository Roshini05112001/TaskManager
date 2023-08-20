import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { DeletedTasksComponent } from './deleted-tasks/deleted-tasks.component';
import { ImportantTasksComponent } from './important-tasks/important-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MyTasksComponent,
    CompletedTasksComponent,
    DeletedTasksComponent,
    ImportantTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
