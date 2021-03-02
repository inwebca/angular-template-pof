import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import {
  SurveyService,
  ICriteriaKit,
  ICriteriaKitDetails,
  Type
} from "../services/survey.service";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  componentList$: Observable<ICriteriaKit[]>;

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.componentList$ = this.surveyService.getSurveys();

    const checkboxes = this.componentList$.pipe(
      map(criterias =>
        criterias.filter(criteria => criteria.kind === Type.CHECKBOX)
      )
    );

    checkboxes.subscribe(value => {
      console.log(value);
    });

    // const dropdown = this.componentList$.pipe(
    //   map(criterias =>
    //     criterias.filter(criteria => criteria.kind === Type.DROPDOWN)
    //   )
    // );
  }
}
