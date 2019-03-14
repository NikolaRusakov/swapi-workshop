import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.scss']
})
export class DetailPanelComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  summary: string;

  constructor() {
  }

  ngOnInit() {
  }

}
