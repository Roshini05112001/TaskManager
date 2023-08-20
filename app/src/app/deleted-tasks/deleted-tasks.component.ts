import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-deleted-tasks',
  templateUrl: './deleted-tasks.component.html',
  styleUrls: ['./deleted-tasks.component.css']
})
export class DeletedTasksComponent implements OnInit {
  deletedTasks: Task[] = [];
  filteredDeletedTasks: Task[] = [];

  searchText = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data: any) => {
        if (data && data.data && data.data.tasks) {
          this.deletedTasks = data.data.tasks.filter((task: Task) => task.deleted);
          this.filterDeletedTasks();
        }
      },
      error => {
        console.error('Error fetching deleted tasks:', error);
      }
    );
  }

  searchTasks() {
    this.filterDeletedTasks();
  }

  filterDeletedTasks() {
    this.filteredDeletedTasks = this.deletedTasks.filter(task =>
      task.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

