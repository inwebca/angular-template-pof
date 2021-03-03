import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "dropdown-component",
  templateUrl: "./dropdown.component.html"
})
export class DropdownComponent implements OnInit {
  @Input() question: string;

  ngOnInit() {}
}
