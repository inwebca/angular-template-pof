import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  public driverSurveys(): Observable<IDriverSurvey[]> {
    let driverSurveysArray: Array<IDriverSurvey> = [
      { 
        startDate: "2021-01-01", 
        endDate: "2021-02-01",
        savedDate: "2021-01-01", 
        driver: {id: 1, name: "Test"},
        question: [
          {id: 1, displayName: "1", choosedMin: 1, choosedMax: 2}
        ]
       }
    ]

    return of(driverSurveysArray);

  }

export interface IDriverSurvey {
  startDate: string;
  endDate: string;
  savedDate: string;
  driver: IDriver;
  questions: Array<IQuestion>;
}

export interface IQuestion {
  id: number;
  displayName: string;
}

export interface IDriver {
  id: number;
  name: string;
}

export interface IMinMaxQuestion extends IQuestion{​
    id: number;
    displayName: string;
    choosedMin: number;
    choosedMax: number;
}​