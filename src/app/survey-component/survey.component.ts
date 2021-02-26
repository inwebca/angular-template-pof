import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  componentList$: Observable<CriteriaKit[]>;

  @Input() name: string;

  ngOnInit() {
    const criteriaKits = [
      new CriteriaKit(1, "question 1 ?", Type.Checkbox),
      new CriteriaKit(2, "question 2 ?", Type.Dropdown)
    ];

    this.componentList$ = of(criteriaKits);
  }
}

export class CriteriaKit {
  constructor(id: number, question: string, type: Type) {
    this.id = id;
    this.question = question;
    this.type = type;
  }
  id: number;
  question: string;
  type: Type;
  detail: CriteriaKitDetail;
}

export class CriteriaKitDetail {
  id: number;
}

export enum Type {
  Dropdown = 1,
  Checkbox = 2
}
