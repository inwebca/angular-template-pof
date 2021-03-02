import { Component, Input, OnInit } from "@angular/core";
import { ICriteriaKitDetails } from "../services/survey.service";

@Component({
  selector: "dropdown-component",
  templateUrl: "./dropdown.component.html"
})
export class DropdownComponent implements OnInit {
  @Input() details: Array<ICriteriaKitDetails>;
  @Input() question: string;

  ngOnInit() {}
}
