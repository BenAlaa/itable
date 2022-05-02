import { SortData, SortTypes } from "../types"

// to convert money formated string to number
export const moneyToNumber = (value: string | undefined): number => {
	if (value && typeof value === 'string')
		return Number(value.replace(/[^0-9.-]+/g, ''))
	return 0
}


// get the sort type for specific column header by col id
export const getSortType = (colId: string, sortByData: SortData | null): SortTypes => {
    return sortByData?.colId === colId ? sortByData?.type : SortTypes.NONE
  }
