import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  total: number;

  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
    this.total = this.counterService.totalActive;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.total = this.counterService.totalActive;

  }
}
