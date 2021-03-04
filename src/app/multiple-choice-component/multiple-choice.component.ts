import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IQuestion } from "../services/survey.service";

@Component({
  selector: "multiple-choice-component",
  templateUrl: "./multiple-choice.component.html"
})
export class MultipleChoiceComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() question: IQuestion;

  ngOnInit() {
    console.log(this.group.get("values"));
  }
}
