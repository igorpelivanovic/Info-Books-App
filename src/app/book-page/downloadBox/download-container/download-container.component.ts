import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-download-container',
  templateUrl: './download-container.component.html',
  styleUrls: ['./download-container.component.scss'],
  animations: [
    trigger('dialogBox', [
      transition(":enter", [
        style({
          transform: 'translate(-50%, -30%)',
          opacity: 0
        }),
        animate('500ms', style({
          transform: 'translate(-50%, -50%)',
          opacity: 1
        }))
      ]),
      transition(":leave", [
        style({
          opacity: 1,
          transform: 'translate(-50%, -50%)'
        }),
        animate('500ms', style({
          opacity: 0,
          transform: 'translate(-50%, -30%)'
        }))
      ])
    ]),
    trigger('dialogContainer', [
      transition(":enter", [
        style({
          background: 'rgba(0,0,0,0)'
        }),
        animate('500ms', style({
          background: 'rgba(0,0,0,0.4)'
        }))
      ]),
      transition(":leave", [
        style({
          background: 'rgba(0,0,0,0.4)'
        }),
        animate('500ms', style({
          background: 'rgba(0,0,0,0)'
        }))
      ])
    ]),
  ]
})
export class DownloadContainerComponent implements OnInit {

  @Input("items") items! : any

  constructor(private dialog: DialogBoxService   ,protected icons: IconsService) { }

  ngOnInit(): void {
  }
  removeDialog():void{
    this.dialog.closeDialog()
  }
  hasProp(obj: object, name:string):boolean{
    return obj.hasOwnProperty(name)
  }

}
