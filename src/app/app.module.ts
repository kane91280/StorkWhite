import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,    
  ],
  imports: [
    BrowserModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
