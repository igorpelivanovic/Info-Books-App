import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/datas';
import { IconsService } from 'src/app/services/icons.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input("items") items !: Book[] 
  @Input("id") id !: number
  @Input("subject") subject !: string
  @Input("loading") isLoading: boolean = false
  @ViewChild("carouselItems", { static: true}) carouselItems !: ElementRef<HTMLDivElement> 

  protected currentXPos : number = 0
  private movePos!: number
  renderBtns: boolean = false;
  renderRightBtn: boolean = false
   
  constructor(private cd: ChangeDetectorRef ,protected icons: IconsService, private renderer: Renderer2, private router: Router) { }
  ngAfterViewChecked(): void {
    this.renderBtns = this.carouselItems.nativeElement.scrollWidth > this.carouselItems.nativeElement.clientWidth && this.isLoading
    this.renderRightBtn = (-this.currentXPos + this.carouselItems.nativeElement.clientWidth) < this.carouselItems.nativeElement.scrollWidth
    this.cd.detectChanges();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any){
    this.checkResponsiveWidth()
    this.renderBtns = this.carouselItems.nativeElement.scrollWidth > this.carouselItems.nativeElement.clientWidth && this.isLoading
  }

  ngAfterViewInit(): void {
    this.currentXPos = new WebKitCSSMatrix(getComputedStyle(this.carouselItems.nativeElement).transform).m41
    this.movePos = 130 + Number(getComputedStyle(this.carouselItems.nativeElement).gap.split("p")[0])
  }
  
  ngOnInit(): void {
  }
  createArr(count: number):any{
    return Array.from(Array(count).keys())
  }
  caroselGoLeft():void{
    this.currentXPos-= this.carouselItems.nativeElement.scrollWidth - (this.carouselItems.nativeElement.clientWidth + Math.abs(this.currentXPos)) > this.movePos ? this.movePos : this.carouselItems.nativeElement.scrollWidth - (this.carouselItems.nativeElement.clientWidth + Math.abs(this.currentXPos))
    this.renderer.setStyle(this.carouselItems.nativeElement, "transform", `translateX(${this.currentXPos}px)`)
  }
  caroselGoRight(): void{
    console.log(this.movePos - Math.abs(this.currentXPos))
    this.currentXPos+= Math.abs(this.currentXPos) >= this.movePos ? this.movePos : Math.abs(this.currentXPos)
    this.renderer.setStyle(this.carouselItems.nativeElement, "transform", `translateX(${this.currentXPos}px)`)
  }
  goToId(id:number):void{
    this.router.navigate(['book', id])
  }
  goToSubject(){
    this.router.navigate(['/books'], {
      queryParams: {subject: this.subject}
    })
  }
  private checkResponsiveWidth(): void{
    console.log(this.carouselItems.nativeElement.scrollWidth < this.carouselItems.nativeElement.clientWidth + Math.abs(this.currentXPos))
   if(this.carouselItems.nativeElement.scrollWidth < this.carouselItems.nativeElement.clientWidth + Math.abs(this.currentXPos)){
      this.currentXPos = -(this.carouselItems.nativeElement.scrollWidth - this.carouselItems.nativeElement.clientWidth)
      this.renderer.setStyle(this.carouselItems.nativeElement, "transform", `translateX(${this.currentXPos}px)`)
    }
  }

}
function HostListerner(): (target: CarouselComponent, propertyKey: "ngAfterViewInit", descriptor: TypedPropertyDescriptor<() => void>) => void | TypedPropertyDescriptor<() => void> {
  throw new Error('Function not implemented.');
}

