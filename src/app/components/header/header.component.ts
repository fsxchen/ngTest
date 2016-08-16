import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'ar-nav',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
              private location:Location) {
  }

  ngOnInit() {
  }

  isActive(path:string):boolean {
    return this.location.path().split(/[;\\?]/)[0] === path;
  }
}
