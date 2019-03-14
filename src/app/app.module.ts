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
import {DetailDialogComponent} from './components/detail-dialog/detail-dialog.component';
import {DetailDialogModule} from './components/detail-dialog/detail-dialog.module';

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
    DetailDialogModule,
  ],
  providers: [],
  entryComponents: [DetailDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    const restURL = new RestLink({
      uri: 'https://swapi.co/api',
    });

    const restLink = {
      link: restURL,
      cache: new InMemoryCache()
    };

    const defaultLink = {
      link: httpLink.create({uri: 'http://localhost:3000/graphql'}),
      cache: new InMemoryCache()
    };

    const gqlLink = {
      link: httpLink.create({uri: 'http://localhost:8888'}),
      cache: new InMemoryCache(),
    };

    apollo.createDefault(defaultLink);

    apollo.createNamed('extra', gqlLink);

    apollo.createNamed('rest', restLink);
  }
}
