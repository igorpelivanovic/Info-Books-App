import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DatasService } from '../services/datas.service';
import { Book } from '../interfaces/datas';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit, OnDestroy {
  
  datas : Book[] = []
  loading: boolean = false
  curentPageNo: number = 1
  skeletonCountNo: number = 30
  nextData: boolean = true
  dataSubscribe!: Subscription
  
  constructor(private router: Router, private DatasService : DatasService, private route: ActivatedRoute ) { }
  ngOnDestroy(): void {
    this.dataSubscribe.unsubscribe()
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.loadingData()
  }
  getQueryParams():object{
    let paramsObj = new Map
    paramsObj.set('page', this.curentPageNo)
    this.route.snapshot.queryParamMap.get('subject') ? paramsObj.set('topic', this.route.snapshot.queryParamMap.get('subject')) : null
    this.route.snapshot.queryParamMap.get('search') ? paramsObj.set('search', this.route.snapshot.queryParamMap.get('search')) : null
    this.route.snapshot.queryParamMap.get('cr') ? paramsObj.set('copyright', this.route.snapshot.queryParamMap.get('cr')) : null
    this.route.snapshot.queryParamMap.get('minCentury') ? paramsObj.set('author_year_start', Number(this.route.snapshot.queryParamMap.get('minCentury')) * 100) : null
    this.route.snapshot.queryParamMap.get('maxCentury') ? paramsObj.set('author_year_end', Number(this.route.snapshot.queryParamMap.get('maxCentury')) * 100) : null
    this.route.snapshot.queryParamMap.get('lang') ? paramsObj.set('languages', this.route.snapshot.queryParamMap.get('lang')) : null
    return paramsObj
  }
  loadingData():void{
    
    if(this.loading || !this.nextData) return
    
    this.loading = true
    this.dataSubscribe = this.DatasService.getDatas(this.getQueryParams()).subscribe({
      next: (data)=>{
        this.datas.push(...data.results)
        this.skeletonCountNo = data.results.length
        this.nextData = data.next == null ? false : true
      },
      error: (err)=>{
        console.log(err)
      },
      complete: ()=>{
        this.loading = false
        this.curentPageNo++
      }
    })
  }
  createArr(count: number):any{
    return Array.from(Array(count).keys())
  }
  goTo(id:number):void{
    this.router.navigate(['book', id])
  }
  @HostListener("window:scroll", ['$event'])
  onScroll(event: any){
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 120 ){
      this.loadingData()
    }
  }

}
