import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  public driverSurveys(): Observable<IDriverSurvey[]> {
    let driverSurveys = Array<IDriverSurvey> = [
      { 
        startDate: "2021-01-01", 
        endDate: "2021-02-01",
        savedDate: "2021-01-01", 
        driver: {id: 1, name: "Test"},
        question: [
          {id : 1, displayName: "test", choosenMin: 1, choosenMax: 2}: IMinMaxQuestion
        ]
       }
    ]

    return of(driverSurveys);

  }

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

export interface IDriverSurvey {
  startDate: string;
  endDate: string;
  savedDate: string;
  driver: IDriver;
  questions: Array<IQuestion>;
}

interface IQuestion {
  id: number;
  displayName: string;
}

interface IDriver {
  id: number;
  name: string;
}

interface IMinMaxQuestion implements IQuestion{​
    id: number;
    displayName: string;
    choosedMin: number;
    choosedMax: number;
}​