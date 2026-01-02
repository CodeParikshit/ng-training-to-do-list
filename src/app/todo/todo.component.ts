// import { Component, signal, computed, inject, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TaskService, Task } from '../task.service'; // Import the service

// @Component({
//   selector: 'app-todo',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   private taskService = inject(TaskService);

//   // Signals
//   tasks = signal<Task[]>([]);
//   currentPage = signal(1);
//   pageSize = signal(5);

//   // Computed
//   pagedTasks = computed(() => {
//     const startIndex = (this.currentPage() - 1) * this.pageSize();
//     return this.tasks().slice(startIndex, startIndex + this.pageSize());
//   });

//   totalPages = computed(() => Math.ceil(this.tasks().length / this.pageSize()));

//   // UI Flags
//   showModal = false;
//   showDeleteModal = false;
//   isEditMode = false;
//   currentTask: Task = this.resetTask();
//   selectedTaskId: number | null = null;

//   ngOnInit() {
//     this.loadTasks();
//   }

//   loadTasks() {
//     this.taskService.getTasks().subscribe(data => {
//       this.tasks.set(data);
//     });
//   }

//   resetTask(): Task {
//     return { assignedTo: 'User 1', status: 'Not Started', dueDate: '', priority: 'Normal', description: '' };
//   }

//   saveTask() {
//     if (this.isEditMode) {
//       this.taskService.updateTask(this.currentTask).subscribe(() => {
//         this.loadTasks(); // Refresh list after update
//         this.closeModal();
//       });
//     } else {
//       this.taskService.createTask(this.currentTask).subscribe(() => {
//         this.loadTasks(); // Refresh list after create
//         this.closeModal();
//       });
//     }
//   }

//   deleteTask() {
//     if (this.selectedTaskId) {
//       this.taskService.deleteTask(this.selectedTaskId).subscribe(() => {
//         this.tasks.set(this.tasks().filter(t => t.id !== this.selectedTaskId));
//         this.showDeleteModal = false;
//       });
//     }
//   }

//   // UI Helper Methods
//   openNewTask() {
//     this.isEditMode = false;
//     this.currentTask = this.resetTask();
//     this.showModal = true;
//   }

//   openEditTask(task: Task) {
//     this.isEditMode = true;
//     this.currentTask = { ...task };
//     this.showModal = true;
//   }

//   closeModal() { this.showModal = false; }
//   confirmDelete(id: number) { this.selectedTaskId = id; this.showDeleteModal = true; }
//   nextPage() { if (this.currentPage() < this.totalPages()) this.currentPage.update(p => p + 1); }
//   prevPage() { if (this.currentPage() > 1) this.currentPage.update(p => p - 1); }
// }

// import { Component, signal } from '@angular/core';

// import { CommonModule } from '@angular/common';

// import { FormsModule } from '@angular/forms';



// interface Task {

//   id?: number;

//   assignedTo: string;

//   status: string;

//   dueDate: string;

//   priority: string;

//   description: string;

// }



// @Component({

//   selector: 'app-todo',

//   standalone: true,

//   imports: [CommonModule, FormsModule],

//   templateUrl: './todo.component.html',

//   styleUrls: ['./todo.component.css']

// })

// export class TodoComponent {

//   // Signal to store tasks

//   tasks = signal<Task[]>([

//     { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '12/10/2024', priority: 'Low', description: 'This task is good' },

//     { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '14/09/2024', priority: 'High', description: 'This task is good' },

//     { id: 3, assignedTo: 'User 3', status: 'cccccc', dueDate: '12/10/2024', priority: 'Low', description: 'This task is fuck' }

//   ]);



//   // Modal Control Flags

//   isEditMode = false;

//   showModal = false;

//   showDeleteModal = false;

 

//   // Form Object

//   currentTask: Task = this.resetTask();

//   selectedTaskId: number | null = null;



//   resetTask(): Task {

//     return { assignedTo: 'User 1', status: 'Not Started', dueDate: '2024-05-12', priority: 'Normal', description: '' };

//   }



//   openNewTask() {

//     this.isEditMode = false;

//     this.currentTask = this.resetTask();

//     this.showModal = true;

//   }



//   openEditTask(task: Task) {

//     this.isEditMode = true;

//     this.currentTask = { ...task };

//     this.showModal = true;

//   }



//   saveTask() {

//     if (this.isEditMode) {

//       this.tasks.set(this.tasks().map(t => t.id === this.currentTask.id ? this.currentTask : t));

//     } else {

//       const newTask = { ...this.currentTask, id: Date.now() };

//       this.tasks.set([...this.tasks(), newTask]);

//     }

//     this.closeModal();

//   }



//   closeModal() {

//     this.showModal = false;

//   }



//   confirmDelete(id: number) {

//     this.selectedTaskId = id;

//     this.showDeleteModal = true;

//   }



//   deleteTask() {

//     this.tasks.set(this.tasks().filter(t => t.id !== this.selectedTaskId));

//     this.showDeleteModal = false;

//   }



 

// }



import { Component, signal, computed } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';



interface Task {

  id?: number;

  assignedTo: string;

  status: string;

  dueDate: string;

  priority: string;

  description: string;

}



@Component({

  selector: 'app-todo',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './todo.component.html',

  styleUrls: ['./todo.component.css']

})

export class TodoComponent {

  // Signals for Data

  tasks = signal<Task[]>([

    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', description: 'This task is good' },

    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is good' },

    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-10-12', priority: 'Low', description: 'Sample task' },

    // Adding more dummy data to demonstrate pagination

    { id: 4, assignedTo: 'User 1', status: 'In Progress', dueDate: '2024-11-12', priority: 'Normal', description: 'More work' },

    { id: 5, assignedTo: 'User 2', status: 'Not Started', dueDate: '2024-12-12', priority: 'High', description: 'Final task' }

  ]);



  // Pagination Signals

  currentPage = signal(1);

  pageSize = signal(3); // Number of items per page



  // Computed signal for the paginated view

  pagedTasks = computed(() => {

    const startIndex = (this.currentPage() - 1) * this.pageSize();

    return this.tasks().slice(startIndex, startIndex + this.pageSize());

  });



  // Total pages calculation

  totalPages = computed(() => Math.ceil(this.tasks().length / this.pageSize()));



  // Modal Control Flags

  isEditMode = false;

  showModal = false;

  showDeleteModal = false;

 

  currentTask: Task = this.resetTask();

  selectedTaskId: number | null = null;



  resetTask(): Task {

    return { assignedTo: 'User 1', status: 'Not Started', dueDate: '2024-05-12', priority: 'Normal', description: '' };

  }



  // Pagination Methods

  goToPage(page: number) {

    this.currentPage.set(page);

  }



  nextPage() {

    if (this.currentPage() < this.totalPages()) {

      this.currentPage.update(p => p + 1);

    }

  }



  prevPage() {

    if (this.currentPage() > 1) {

      this.currentPage.update(p => p - 1);

    }

  }



  // Task Actions

  openNewTask() {

    this.isEditMode = false;

    this.currentTask = this.resetTask();

    this.showModal = true;

  }



  openEditTask(task: Task) {

    this.isEditMode = true;

    this.currentTask = { ...task };

    this.showModal = true;

  }



  saveTask() {

    if (this.isEditMode) {

      this.tasks.set(this.tasks().map(t => t.id === this.currentTask.id ? this.currentTask : t));

    } else {

      const newTask = { ...this.currentTask, id: Date.now() };

      this.tasks.set([...this.tasks(), newTask]);

    }

    this.closeModal();

  }



  closeModal() {

    this.showModal = false;

  }



  confirmDelete(id: number) {

    this.selectedTaskId = id;

    this.showDeleteModal = true;

  }



  deleteTask() {

    this.tasks.set(this.tasks().filter(t => t.id !== this.selectedTaskId));

    // Reset to page 1 if current page becomes empty

    if (this.pagedTasks().length === 1 && this.currentPage() > 1) {

        this.prevPage();

    }

    this.showDeleteModal = false;

  }

}

