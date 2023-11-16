import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatasService } from '../services/datas.service';
import { Book, Books } from '../interfaces/datas';
import { IconsService } from '../services/icons.service';
import { DialogBoxService } from '../services/dialog-box.service';
import { animateChild, query, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
  providers: [DatasService],
  animations: [
    trigger('dialogContainer', [
      transition(":enter", [
        query("@*", animateChild()),
        style({
        })
      ]),
      transition(":leave", [
        query("@*", animateChild())
      ])
    ])
  ]
})
export class BookPageComponent implements OnInit, OnDestroy {


  book: Book | undefined;
  formatLenghtBook: number = 0
  loading : boolean = true
  downloadContainer: boolean = true
  subscirbeData !: Subscription
  subscirbeCarouselData !: Subscription
  loadingCarouselData : boolean = false
  carouselData: Book[] = []
  carouselSubject!: string
  id!: number


  constructor(protected dialog: DialogBoxService, protected icons: IconsService, private route: ActivatedRoute, private DatasService: DatasService, private router : Router) { }
 
  ngOnDestroy(): void {
    this.subscirbeData.unsubscribe()
    this.subscirbeCarouselData.unsubscribe()
  }

  ngOnInit(): void {
    this.getBook()
  }
  sendSubject(subject: string):void{
    this.router.navigate(['/books'], {
      queryParams: {subject: subject}
    })
  }
  getId(): object{
    return new Map().set("ids", this.route.snapshot.paramMap.get('id'))
  }
  getBook():void{
    this.loading = true
    this.subscirbeData = this.DatasService.getDatas(this.getId()).subscribe({
      next: data=>{
        if(data.count == 0) this.router.navigate(['/books'])
        this.book = data.results[0]
        this.id = this.book?.id
        this.carouselSubject = this.book?.subjects[0]
        this.formatLenghtBook = Object.keys(this.book?.formats).length
      },
      error: (error)=>{
        console.log("OPS")
      },
      complete: ()=>{
        this.loading = false
        this.subscirbeCarouselData = this.DatasService.getDatas(this.getSubject()).subscribe({
          next: data=>{
           this.carouselData.push(...data.results)
          },
          error: (err)=>console.log(err),
          complete: ()=>{
            this.loadingCarouselData = true
          }
        })
      }
    })
    
  }
  protected getSubject(){
    return new Map().set("topic", this.carouselSubject)
  }
  renderDownloadContianer():void{
    this.dialog.openDialog()
  }
  errorImg(event: Event):void{
    let element = event.target as HTMLInputElement
    element.src = "./assets/no-image.png"
  }

}
