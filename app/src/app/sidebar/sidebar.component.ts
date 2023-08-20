import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activeTab: string = 'my-tasks';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize active tab based on the current route
    if (this.router.url.includes('completed-tasks')) {
      this.activeTab = 'completed-tasks';
    } else if (this.router.url.includes('deleted-tasks')) {
      this.activeTab = 'deleted-tasks';
    } else if (this.router.url.includes('important-tasks')) {
      this.activeTab = 'important-tasks';
    } else {
      this.activeTab = 'my-tasks';
    }
  }

  switchTab(tab: string) {
    this.activeTab = tab;
    this.router.navigateByUrl(tab);
  }
}
