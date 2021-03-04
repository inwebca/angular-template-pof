import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { IQuestion } from "../services/survey.service";
@Component({
  selector: "min-max-component",
  templateUrl: "./min-max.component.html"
})
export class MinMaxComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() question: IQuestion;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.group);
  }
}
