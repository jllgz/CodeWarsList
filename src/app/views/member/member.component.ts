import { Component, OnInit } from '@angular/core';
import { User } from '../../locale/interface/user';
import { CodeWarsData } from '../../locale/data';
import { Challenge } from 'src/app/locale/interface/challenge';
import { of } from 'rxjs';

@Component({
  selector: 'cwl-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  data = CodeWarsData;
  // challenges: Challenge[] = [];
  users: User[] = [];
  constructor() { }

  ngOnInit() {
    // this.data.user.forEach(i => {
    //   this.users.push(i);
    // });
    console.log(this.users);
  }
}
