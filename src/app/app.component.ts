import {Component, OnInit} from '@angular/core';
import {SetSeoService} from './set-seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'awesome-seo';
  constructor(private _seoService: SetSeoService) {}
  ngOnInit(): void {
    this._seoService.handlerRouter()
      .subscribe((event) => {
        this._seoService.updateTitle(event['title']);
        // Updating Description tag dynamically with title
        this._seoService.updateDescription(event['title'] + event['description']);
      });
  }
}
