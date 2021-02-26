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
      new CriteriaKit(1, "question 1 ?"),
      new CriteriaKit(2, "question 2 ?")
    ];

    this.componentList$ = of(criteriaKits);
  }
}

export class CriteriaKit {
  constructor(id: number, question: string) {
    this.id = id;
    this.question = question;
  }
  id: number;
  question: string;
  detail: CriteriaKitDetail;
}

export class CriteriaKitDetail {
  id: number;
}
