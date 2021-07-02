import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GithubApiService } from './gitrepo.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'hello',
  styleUrls: ['./app.component.css'],
  templateUrl: `./gitrepo.component.html`
})
export class GitRepoComponent implements OnInit {
  @Input() name: string;
  repos$: any;
  public model: any;
  selectedRepo: any;
  repoInput$ = new Subject<string>();
  repoLoading = false;

  constructor(private apiService: GithubApiService) {}
  ngOnInit() {
    this.getRepoData();
  }
  getRepoData() {
    this.repoInput$
      .pipe(
        distinctUntilChanged(),
        debounceTime(1000)
      )
      .subscribe(value => {
        console.log(value);
        this.apiService.getRepoByKeyword(value).subscribe(res => {
          this.repos$ = res.items;
        });
      });
    console.log(this.repos$);
  }
}
