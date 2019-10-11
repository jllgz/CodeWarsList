import { Component, OnInit } from '@angular/core';
import { User } from '../../locale/interface/user';
import { Challenge } from '../../locale/interface/challenge';
import { CodeWarsData } from '../../locale/data';

@Component({
  selector: 'cwl-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  data = CodeWarsData;
  users: User[] = [];
  challenges: Challenge[] = [];
  userId: number;
  userName;
  
  constructor() { }

  ngOnInit() {
    this.userId = this.data.user[0].id;
    this.data.user.forEach(i => {
      this.users.push(i);
    });
    console.log(this.users);
  }
}
