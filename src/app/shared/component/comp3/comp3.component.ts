import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
})
export class Comp3Component implements OnInit {
  getValue!: string;
  subs!: Subscription;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.subs = this._userService.userName$.subscribe((s) => {
      this.getValue = s;
    });
  }
}
