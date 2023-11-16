import { Injectable } from '@angular/core';
import { faCircleXmark, faMagnifyingGlass, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { faFilter,  faXmark, faCopyright } from "@fortawesome/free-solid-svg-icons"
import {  faDownload } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFile, faFileZipper, faFileCode, faFileImage, faFilePen, faFileLines, faPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


@Injectable({
  providedIn: 'root'
})
export class IconsService {

  
    faCircleXmark= faCircleXmark
    faMagnifyingGlass= faMagnifyingGlass
    faSun= faSun
    faMoon= faMoon
    faFilter= faFilter
    faXmark= faXmark
    faCopyright= faCopyright
    faDownload= faDownload
    faChevronUp= faChevronUp
    faFile= faFile
    faFileZipper= faFileZipper
    faFileCode= faFileCode
    faFileImage= faFileImage
    faFilePen= faFilePen
    faFileLines= faFileLines
    faPlus= faPlus
    faAngleLeft= faAngleLeft
    faAngleRight= faAngleRight

  

  constructor() { }
}
