import { Component, Input, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "survey-component",
  templateUrl: "./survey-component.html"
})
export class SurveyComponent implements OnInit {
  componentList: ComponentType[];

  @Input() name: string;

  ngOnInit() {
    this.componentList = [
      new ComponentType(1, "dropdown"),
      new ComponentType(2, "checkbox")
    ];

    const componentList$ = of(this.componentList);
  }
}

export class ComponentType {
  constructor(id, kind) {
    this.id = id;
    this.kind = kind;
  }
  id: number;
  kind: string;
}
