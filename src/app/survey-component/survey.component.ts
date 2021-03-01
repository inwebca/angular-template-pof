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
          } as ICriteriaKitDetailsDropdown,
          {
            id: 2,
            label: "choice2",
            value: "choice2"
          } as ICriteriaKitDetailsDropdown
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
          } as ICriteriaKitDetailsCheckbox,
          {
            id: 2,
            label: "choice2",
            value: true
          } as ICriteriaKitDetailsCheckbox
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
  details: Array<ICriteriaKitDetailsDropdown | ICriteriaKitDetailsCheckbox>;
}

export interface ICriteriaKitDetailsDropdown {
  id: number;
  label: string;
  value: string;
}

export interface ICriteriaKitDetailsCheckbox {
  id: number;
  label: string;
  value: boolean;
}

enum Type {
  DROPDOWN,
  CHECKBOX
}
