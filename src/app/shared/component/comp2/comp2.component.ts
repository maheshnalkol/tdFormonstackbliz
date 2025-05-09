import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  getValue!: string;
  subs!: Subscription;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.subs = this._userService.userName$.subscribe((s) => {
      this.getValue = s;
    });
  }
}
