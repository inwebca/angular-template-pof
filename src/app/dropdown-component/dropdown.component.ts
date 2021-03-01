import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "dropdown-component",
  templateUrl: "./dropdown.component.html"
})
export class DropdownComponent implements OnInit {
  dataSource: Array<any>;

  ngOnInit() {
    this.dataSource = [
      {
        id: 1,
        name: "test"
      },
      {
        id: 2,
        name: "test2"
      }
    ];
  }
}
