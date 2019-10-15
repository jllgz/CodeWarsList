import { Component, OnInit } from '@angular/core';
import { User } from '../../locale/interface/user';
import { Challenge } from '../../locale/interface/challenge';
import { CodeWarsData } from '../../locale/data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


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
  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.userId = this.data.user[0].id;
    this.data.user.forEach(i => {
      this.users.push(i);
    });
    this.http.get(this.apiUrl + '').toPromise().then(
      res =>{
        console.log(res);
      }
    )
  }
}
