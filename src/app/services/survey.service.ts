import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  public getSurveys(): ICriteriaKit[] {
    return Array<ICriteriaKit>();
  }

  public getTest(): boolean {
    return true;
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
