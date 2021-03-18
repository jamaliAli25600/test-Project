import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  values: any;
  constructor(public http: HttpClient) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getValue();
  }

  // tslint:disable-next-line:typedef
  getValue() {
    this.http.get('http://localhost:51473/api/values').subscribe (resp => {
      this.values = resp;
    }, error => {
      alert(error);
    });
  }
}
