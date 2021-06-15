import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  @Output() OnDeleted: EventEmitter<Task> = new EventEmitter();
  @Output() OnSelected: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: boolean;

  constructor() { }

  ngOnInit(): void { }

  deleteTask() {
    this.OnDeleted.emit(this.task);
  }

  taskClick() {
    this.OnSelected.emit(this);
  }

}
