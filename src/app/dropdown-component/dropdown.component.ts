import { Component, Input, OnInit } from "@angular/core";
import { ICriteriaKitDetails } from "../services/survey.service";
import { CriteriaKitDetails } from "../survey-component/survey.component";

@Component({
  selector: "dropdown-component",
  templateUrl: "./dropdown.component.html"
})
export class DropdownComponent implements OnInit {
  @Input() details: Array<CriteriaKitDetails>;
  @Input() question: string;

  ngOnInit() {}
}
