import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey-component/survey.component";
import { DropdownComponent } from "./dropdown-component/dropdown.component";
import { CheckboxComponent } from "./checkbox-component/checkbox.component";
import { SurveyService } from "./service/survey.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    SurveyComponent,
    DropdownComponent,
    CheckboxComponent
  ],
  providers:[
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
