import { Component, OnInit } from '@angular/core';
import { User } from '../../locale/interface/user';
import { Challenge } from '../../locale/interface/challenge';
import { CodeWarsData } from '../../locale/data';

@Component({
  selector: 'cwl-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
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
