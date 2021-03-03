import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "multiple-choice-component",
  templateUrl: "./multiple-choice.component.html"
})
export class MultipleChoiceComponent implements OnInit {
  @Input() question: string;

  ngOnInit() {}
}
