import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  componentList$: Observable<ICriteriaKit[]>;

  @Input() name: string;

  ngOnInit() {
    const criteriaKits: Array<ICriteriaKit> = [
      {
        id: 1,
        name: "dropdown",
        kind: Type.DROPDOWN,
        question: "question1",
        details: [
          {
            id: 1,
            label: "choice1",
            value: "choice1"
          },
          {
            id: 2,
            label: "choice2",
            value: "choice2"
          }
        ]
      },
      {
        id: 2,
        name: "checkbox",
        kind: Type.CHECKBOX,
        question: "question2",
        details: [
          {
            id: 1,
            label: "choice1",
            value: false
          },
          {
            id: 2,
            label: "choice2",
            value: true
          }
        ]
      }
    ];

    this.componentList$ = of(criteriaKits);
  }
}

export interface ICriteriaKit {
  id: number;
  name: string;
  question: string;
  kind: Type;
  details: Array<ICriteriaKitDetails>;
}

export interface ICriteriaKitDetails {
  id: number;
  label: string;
  value: string | boolean;
}

enum Type {
  DROPDOWN,
  CHECKBOX
}
