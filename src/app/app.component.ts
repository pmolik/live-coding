import {Component, OnInit} from '@angular/core';
import {ToDoListItem} from './models/to-do-list-item';
import {ToListService} from './services/to-list.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public toDoList: Observable<ToDoListItem[]>;
  public form: FormGroup;

  constructor(private toListService: ToListService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createListItemForm();
    this.getToDoList();
  }

  public addListItem(): void {
    const listItem: ToDoListItem = this.form.value;
    this.toListService.addItemToList(listItem);
  }

  public updateItem(listItem: ToDoListItem): void {
    this.toListService.updateItemList(listItem);
  }

  private createListItemForm(): void {
    this.form = this.fb.group({title: '', checked: false});
  }

  private getToDoList(): void {
    this.toDoList = this.toListService.getToList();
  }

}
