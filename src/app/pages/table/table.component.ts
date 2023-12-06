import { Component, OnInit, signal } from '@angular/core';
import { Users } from './users';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public users = signal<IUser[]>([]);
  
  constructor() {
    this.users.set(Users);
  }

  ngOnInit(): void {
  }


}