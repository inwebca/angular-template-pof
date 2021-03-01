import { Component, Input, OnInit } from "@angular/core";
import { ICriteriaKitDetailsDropdown } from "../survey-component/survey.component";

@Component({
  selector: "dropdown-component",
  templateUrl: "./dropdown.component.html"
})
export class DropdownComponent implements OnInit {
  @Input() details: Array<ICriteriaKitDetailsDropdown>;
  @Input() question: string;

  ngOnInit() {}
}
