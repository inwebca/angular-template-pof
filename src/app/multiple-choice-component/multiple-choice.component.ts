import { Component, Input, OnInit } from "@angular/core";
import {
  IMinMaxQuestion,
  IMultipleChoiceQuestion
} from "../services/survey.service";

@Component({
  selector: "multiple-choice-component",
  templateUrl: "./multiple-choice.component.html"
})
export class MultipleChoiceComponent implements OnInit {
  @Input() data: IMultipleChoiceQuestion;

  ngOnInit() {}
}
