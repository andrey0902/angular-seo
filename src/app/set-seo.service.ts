import { Injectable } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SetSeoService {

  constructor(private meta: Meta,
              private title: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  handlerRouter() {
   return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    );
  }
}
