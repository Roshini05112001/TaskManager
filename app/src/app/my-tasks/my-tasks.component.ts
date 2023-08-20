import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = [];
  searchText: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Fetch data from your JSON file using the task service
    this.taskService.getTasks().subscribe(
      (data: any) => {
        this.tasks = data.data.tasks;
        this.filteredTasks = this.tasks;
      },
      error => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  searchTasks() {
    this.filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getTagColor(tag: string): string {
    // Implement this function to return the appropriate color for each tag
    // For example:
    if (tag === 'low') {
      return 'blue';
    } else if (tag === 'medium') {
      return 'orange';
    } else if (tag === 'high') {
      return 'red';
    } else {
      return 'gray';
    }
  }

  formatDueDate(timestamp: number): string {
    const date = new Date(timestamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }
  
}


