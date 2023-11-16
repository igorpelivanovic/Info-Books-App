export interface Books{
    count: number,
    next: null | string,
    previous: null | string,
    results: Book[]
}

export interface Book{
    id: number,
    title: string,
    authors: Author[],
    translators: string[],
    subjects: string[],
    bookshelves: string[],
    languages: string[],
    copyright: boolean,
    media_type: string,
    formats: any,
    download_count: number
}

export interface Author{
    name: string,
    birth_year: number,
    death_year: number
}

export interface languageOption{
    title : string,
    value : string,
    checked?: boolean
}
export interface languageValue extends languageOption{
    checked : boolean
}
export interface filterBoxValues{
    century: {
        min: number,
        max: number,
    }
    copyRight: boolean,
    languages: languageValue []
}
export interface FilterFormValue{
    copyRightValue: boolean,
    inputLangSearch: string,
    languages: boolean[],
    maxCenturyValue: number,
    minCenturyValue: number
}
