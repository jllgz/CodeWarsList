import { Component, OnInit } from '@angular/core';
import { User } from '../../locale/interface/user';
import { Challenge } from '../../locale/interface/challenge';
import { CodeWarsData } from '../../locale/data';
import { of } from 'rxjs';

@Component({
  selector: 'cwl-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  data = CodeWarsData;
  users: User[] = [];
  challenges: Challenge[] = [];
  constructor() { }

  ngOnInit() {
    this.data.user.forEach(i => {
      this.users.push(i);
    });
    console.log(this.users);
  }
}
