import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  completedTasks: Task[] = [];
  filteredCompletedTasks: Task[] = [];

  searchText = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data: any) => {
        if (data && data.data && data.data.tasks) {
          this.completedTasks = data.data.tasks.filter((task: Task) => task.completed);
          this.filterCompletedTasks();
        }
      },
      error => {
        console.error('Error fetching completed tasks:', error);
      }
    );
  }

  searchTasks() {
    this.filterCompletedTasks();
  }

  filterCompletedTasks() {
    this.filteredCompletedTasks = this.completedTasks.filter(task =>
      task.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

