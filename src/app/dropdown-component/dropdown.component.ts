import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { ICriteriaKitDetails } from "../survey-component/survey.component";

@Component({
  selector: "dropdown-component",
  templateUrl: "./dropdown.component.html"
})
export class DropdownComponent implements OnInit {
  @Input() details: Array<ICriteriaKitDetails>;

  ngOnInit() {}
}
