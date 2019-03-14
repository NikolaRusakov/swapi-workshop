import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {RestLink} from 'apollo-link-rest';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    HttpLinkModule,
    ApolloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    const restLink = new RestLink({
      uri: 'https://swapi.co/api',
    });


    apollo.create({
      // link: restLink,
      link: httpLink.create({uri: 'http://localhost:3000/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
