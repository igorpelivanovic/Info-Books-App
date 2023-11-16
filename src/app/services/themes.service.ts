import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService{

  theme! : string

  constructor(@Inject(DOCUMENT) private  document : Document) { }

  getThemeFromStorage() : string{
    let themeVal = localStorage.getItem("theme")
    if(themeVal == null || undefined) return ""
    return themeVal
  }
  applyTheme(): void{
    this.theme = this.getThemeFromStorage()
    this.document.body.className = this.theme
  }
  setThemeToStorage() : void{
    this.theme = this.theme == "dark" ? "" : "dark";
    localStorage.setItem("theme", this.theme)
  } 
  changeTheme(): void{
    this.document.body.classList.toggle("dark")
    this.setThemeToStorage()
  }
}
