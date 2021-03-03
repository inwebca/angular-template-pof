import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  public driverSurveys(): Observable<IDriverSurvey[]> {
    let driverSurveysArray: Array<IDriverSurvey> = [
      {
        id: 1,
        startDate: "2021-01-01",
        endDate: "2021-02-01",
        savedDate: "2021-01-01",
        driver: { id: 1, name: "Test" },
        questions: []
      },
      {
        id: 2,
        startDate: "2022-01-01",
        endDate: "2022-02-01",
        savedDate: "2022-01-01",
        driver: { id: 2, name: "Test 2" },
        questions: []
      }
    ];

    return of(driverSurveysArray);
  }

  public driverSurvey(id: number): Observable<IDriverSurvey> {
    let survey: IDriverSurvey = {
      id: 1,
      startDate: "2021-01-01",
      endDate: "2021-02-01",
      savedDate: "2021-01-01",
      driver: { id: 1, name: "Test" },
      questions: [
        {
          id: 1,
          displayName: "1",
          choosedMin: 1,
          choosedMax: 2
        } as IMinMaxQuestion
      ]
    };

    return of(survey);
  }
}

export interface IDriverSurvey {
  id: number;
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

export interface IMinMaxQuestion extends IQuestion {
  id: number;
  displayName: string;
  choosedMin: number;
  choosedMax: number;
}
