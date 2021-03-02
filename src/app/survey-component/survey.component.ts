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

  componentList$: Observable<ICriteriaKit[]>;
  @Input() name: string;

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.componentList$ = this.surveyService.getSurveys();

    // const checkboxes = this.componentList$.pipe(
    //   map(criterias =>
    //     criterias.filter(criteria => criteria.kind === Type.CHECKBOX)
    //   )
    // );

    // const dropdown = this.componentList$.pipe(
    //   map(criterias =>
    //     criterias.filter(criteria => criteria.kind === Type.DROPDOWN)
    //   )
    // );
  }
}
