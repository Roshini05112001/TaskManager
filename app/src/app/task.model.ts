export interface Task {
    id: number;
    title: string;
    due_date: number;
    deleted: boolean;
    starred: boolean;
    completed: boolean;
    tags: string[];
    owner: {
      id: number;
      first: string;
      last: string;
    };
  }
  