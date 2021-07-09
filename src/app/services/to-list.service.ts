import {Injectable} from '@angular/core';
import {ToDoListItem} from '../models/to-do-list-item';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToListService {
  private toList: ToDoListItem[] = [{title: 'test', checked: true}, {title: 'test2', checked: false}];
  private toDoListSubject: BehaviorSubject<ToDoListItem[]> = new BehaviorSubject<ToDoListItem[]>(this.toList);

  constructor() {
  }

  getToList(): Observable<ToDoListItem[]> {
    return this.toDoListSubject.asObservable();
  }

  addItemToList(listItem: ToDoListItem): void {
    this.toList = [...this.toList, listItem];
    this.toDoListSubject.next(this.toList);
  }

  updateItemList(listItem: ToDoListItem): void {
    const newListItem = this.toList.filter((item) => {
      return item.title !== listItem.title;
    });
    const toList = [...newListItem, listItem];
    this.toDoListSubject.next(toList);
  }
}
