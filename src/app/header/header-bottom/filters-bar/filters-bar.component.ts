import { style, transition, trigger, animate} from '@angular/animations';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterBoxService } from 'src/app/services/filter-box.service';
import { IconsService } from 'src/app/services/icons.service';


@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.scss'],
  animations: [
    trigger('filtersContainer', [
      transition(":enter", [
        style({
          transform: 'translateY(-120%)'
        }),
        animate('500ms', style({
          transform: 'translateY(0%)'
        }))
      ]),
      transition(":leave", [
        style({
          transform: 'translateY(0%)'
        }),
        animate('500ms', style({
          transform: 'translateY(-120%)'
        }))
      ])
    ]),
    
  ]
})
export class FiltersBarComponent implements OnInit, OnDestroy {

  @ViewChild('optionsContainer', { static: false })
  optionsContainer!: ElementRef;

  @ViewChild('inputLangSearch', { static: false })
  inputLangSearch!: ElementRef


  @ViewChild('inputCentryMax', { static: true })
  inputCentryMax!: ElementRef

  

  setAnimation: boolean = true
  showOptionsContianer: boolean = false
  filterForm!: FormGroup
  progresStyle: { background: string; } | undefined;

  constructor(protected icons: IconsService, private form: FormBuilder,protected filterBox: FilterBoxService) { }
  ngOnDestroy(): void {
    this.setAnimation = false
    this.showOptionsContianer ? this.optionsContainer.nativeElement.remove() : null
  }

  get minCenturyValue(): Number{
    return this.filterForm.get("minCenturyValue")?.value
  }

  get maxCenturyValue(): Number{
    return this.filterForm.get("maxCenturyValue")?.value
  }

  get languagesFormArray(){
    return this.filterForm.get("languages") as FormArray
  }

  ngOnInit(): void {
    this.generateForm()
  }
  generateForm(): void{
    this.filterForm = this.form.group({
      inputLangSearch: new FormControl(""),
      languages: this.form.array([]),
      copyRightValue: new FormControl(this.filterBox.value.copyRight),
      minCenturyValue: new FormControl(this.filterBox.value.century.min),
      maxCenturyValue: new FormControl(this.filterBox.value.century.max),
    })
    this.filterBox.value.languages.map((option)=>{
      this.languagesFormArray.push( new FormControl(option.checked))
    })

  }
  clearInputLangSearch():void{
    this.filterForm.get("inputLangSearch")?.reset('')
  }
  addLangOption():void{
    this.closeOptionsContainer()
    this.clearInputLangSearch()
  }
  removeLangOption(i:number):void{
    this.languagesFormArray.controls[i].setValue(false)
  }
  openOptionsContainer(): void {
    this.showOptionsContianer = true
  }
  closeOptionsContainer(): void {
    this.showOptionsContianer = false
  }
  progresLinear():object{
    let maxVal = this.inputCentryMax.nativeElement.max
    let startGradiend = Number(this.minCenturyValue) / (maxVal / 100) 
    let endGradiend = Number(this.maxCenturyValue) / (maxVal / 100) 
    return {'background': `linear-gradient(90deg, #bdb3b3 0%, #bdb3b3 ${startGradiend}%, #413B88 ${startGradiend}%, #413B88 ${endGradiend}%, #bdb3b3 ${endGradiend}%)`}
  }
  resetForm(): void{
    let value = this.filterBox.resetValue()
    this.filterForm.reset({
      inputLangSearch: "",
      copyRightValue: value.copyRight,
      minCenturyValue: value.century.min,
      maxCenturyValue: value.century.max,
    })
    let languages = this.filterForm.get("languages") as FormArray
    languages.controls.forEach((cont, index)=>{
      cont.setValue(value.languages[index].checked)
    })
  }
  submitForm(): void{
    this.filterBox.addValues(this.filterForm.value)
    this.filterBox.hide()
  }

}
