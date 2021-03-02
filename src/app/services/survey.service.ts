import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  public getSurveys(): Observable<ICriteriaKit[]> {
    let criteriaKits: Array<ICriteriaKit> = [
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
          },
          {
            id: 3,
            label: "choice2",
            value: false
          }
        ]
      }
    ];
    return of(criteriaKits);
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

export enum Type {
  DROPDOWN,
  CHECKBOX
}
