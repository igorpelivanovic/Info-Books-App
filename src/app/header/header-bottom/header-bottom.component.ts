import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { Component, Host, HostBinding, HostListener, OnDestroy, OnInit, Query } from '@angular/core';
import { IconsService } from '../../services/icons.service';
import { FilterBoxService } from 'src/app/services/filter-box.service';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
  providers:[ FilterBoxService ],
  animations: [
    trigger('filtersBar', [
      transition(":enter", [
       query("@filtersContainer", animateChild()),
      ]),
      transition(":leave", [
        query("@filtersContainer", animateChild()),
      ])
    ]),
    trigger("loadHeaderBtns", [
      transition(":leave", [
        style({
          display: 'block'
        }),
        animate('0ms', style({
          display: 'none'
        }))
      ])
    ])
  ]
})
export class HeaderBottomComponent implements OnInit, OnDestroy {


  constructor(protected icons: IconsService, protected filterBox: FilterBoxService) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
