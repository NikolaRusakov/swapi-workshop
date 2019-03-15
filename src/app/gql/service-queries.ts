import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import {GQL_NODE_QUERY} from './queries';


interface NodeVars {
  id: string;
  typename: string;
}

@Injectable({
  providedIn: 'root'
})
export class NodeGQL extends Query<any, NodeVars> {
  public client = 'extra';

  document = GQL_NODE_QUERY;
}
