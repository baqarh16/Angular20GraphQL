import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { apolloClientFactory } from './graphql.provider';
import { GraphQL } from './services/graphql/graphql';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  providers: [
    { provide: APOLLO_OPTIONS, useFactory: apolloClientFactory },
    Apollo,
    GraphQL
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularGraphQL');
}
