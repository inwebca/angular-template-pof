import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { SurveyService } from "../services/survey.service";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  //componentList$: Observable<ICriteriaKit[]>;

  @Input() name: string;

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    let test = this.surveyService.getSurveys();

    /* const criteriaKits: Array<ICriteriaKit> = [
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
            value: true
          },
          {
            id: 2,
            label: "choice2",
            value: true
          }
        ]
      }
    ]; */

    this.componentList$ = of(criteriaKits);

    const checkboxes = this.componentList$.pipe(
      map(criterias =>
        criterias.filter(criteria => criteria.kind === Type.CHECKBOX)
      )
    );

    const dropdown = this.componentList$.pipe(
      map(criterias =>
        criterias.filter(criteria => criteria.kind === Type.DROPDOWN)
      )
    );
  }
}
