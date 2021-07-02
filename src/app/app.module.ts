import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GitRepoComponent } from './gitrepo.component';
import { GithubApiService } from './gitrepo.service';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgSelectModule],
  declarations: [AppComponent, GitRepoComponent],
  providers: [GithubApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
