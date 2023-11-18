import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Validations } from '../../validations/validationClass';
import { DOCUMENT } from '@angular/common';
import { ThemesService } from '../../services/themes.service';
import { IconsService } from '../../services/icons.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit, OnDestroy {

  defVal : string = ""
  form!: FormGroup;
  gueryParamsSubscribe!: Subscription

  constructor(private route: ActivatedRoute ,private router: Router,protected icons: IconsService ,private f: FormBuilder, @Inject(DOCUMENT) private document: Document, private theme: ThemesService) { }
  ngOnDestroy(): void {
    this.gueryParamsSubscribe.unsubscribe()
  }

  ngOnInit(): void {
    this.form = this.f.group({
      searchValue: new FormControl( "", [Validations.searchValue])
    })
    this.getDefaultValueForSearchValue()
    this.theme.applyTheme()
  }
  getDefaultValueForSearchValue():any{
    this.gueryParamsSubscribe = this.route.queryParams
      .subscribe((params: Params) => {
        if (params.hasOwnProperty('search')) this.form.patchValue({"searchValue": params['search']})
      }
    );
  }
  changeTheme(): void{
    this.theme.changeTheme()
  }

  submitForm(): void {
    if (this.form.get("searchValue")?.errors?.['trim']) return
    this.router.navigate(['books'],{
      queryParams: {search: this.form.get("searchValue")?.value.trim()},

    })
  }

}
