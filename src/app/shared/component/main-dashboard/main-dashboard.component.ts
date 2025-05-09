import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  onaddUser(userName: HTMLInputElement) {
    let val = userName.value;
    userName.value = '';
    this._userService.userName$.next(val);
  }
}
