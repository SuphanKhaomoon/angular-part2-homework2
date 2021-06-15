import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChildren(TaskComponent) taskViewChildren: QueryList<TaskComponent>; 
  tasks: Task[];

  count: number;
  name: string = "";
  description: string = "";

  isShow: boolean = true;
  index: number;

  constructor() {
    this.tasks = [];
    this.count = 0;
   }

  ngOnInit(): void { }

  addTask() {
    this.tasks.push({
      id: this.count += 1,
      name: this.name,
      description: this.description
    })

    this.name = null;
    this.description = null;
  }

  deletedTask(task: Task, number: number) {
    this.tasks.splice(number, 1);
    this.isShow = true;
  }

  selectedTask(taskComponent: TaskComponent, number: number) {
    this.clearSelected();
    taskComponent.isSelected = !taskComponent.isSelected;
    this.isShow = false;
    this.index = number;
  }

  clearSelected() {
    this.taskViewChildren.forEach(task => {
      task.isSelected = false;
    })
  }

  backToAddTask() {
    this.clearSelected();
    this.isShow = true;
  }

}

