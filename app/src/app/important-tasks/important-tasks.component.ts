import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model'; 

@Component({
  selector: 'app-important-tasks',
  templateUrl: './important-tasks.component.html',
  styleUrls: ['./important-tasks.component.css']
})
export class ImportantTasksComponent implements OnInit {
  importantTasks: Task[] = [];
  filteredImportantTasks: Task[] = [];

  searchText = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data: any) => {
        if (data && data.data && data.data.tasks) {
          this.importantTasks = data.data.tasks.filter((task: Task) => task.starred); // Filter tasks with starred = true
          this.filterImportantTasks();
        }
      },
      error => {
        console.error('Error fetching important tasks:', error);
      }
    );
  }

  searchTasks() {
    this.filterImportantTasks();
  }

  filterImportantTasks() {
    this.filteredImportantTasks = this.importantTasks.filter(task =>
      task.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

