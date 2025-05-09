import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  getValue!: string;
  subs!: Subscription;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.subs = this._userService.userName$.subscribe((s) => {
      this.getValue = s;
    });
  }
}
