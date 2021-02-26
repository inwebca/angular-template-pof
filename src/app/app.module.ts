import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey-component/survey.component";
import { DropdownComponent } from "./dropdown-component/dropdown.component";
import { CheckboxComponent } from "./checkbox-component/checkbox.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SurveyComponent,
    DropdownComponent,
    CheckboxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
