import { useState, useCallback, useMemo } from 'react'
import {
	Option,
	ColumnData,
	SortTypes,
	TableInstance,
	SortData,
} from '../types'

const useTable = (
	data: Array<any>,
	columns: Array<ColumnData>,
	aggSelector: string,
	aggFormatter: (value: string) => number
): TableInstance => {
	const [tableData, setTableData] = useState<Array<any>>(data)
	const [tableColumns, setTableColumns] = useState<Array<ColumnData>>(columns)
	const [aggBy, setAggBy] = useState<string>('')
	const [sortBy, setSortBy] = useState<SortData | null>(null)
    
	const aggOptions: Array<Option> = useMemo(
		() =>
			columns
				.filter(col => col.id !== aggSelector)
				.map(col => ({ label: col.title, value: col.id })),
		[columns, aggSelector]
	)

	const aggTotal = useMemo(() => {
		return tableData.reduce((prev, curr) => {
			return (prev +=
				typeof curr[aggSelector] === 'string'
					? aggFormatter(curr[aggSelector])
					: curr[aggSelector])
		}, 0)
	}, [tableData, aggFormatter, aggSelector])

	const handleAggChange = (aggByKey: string) => {
		setAggBy(aggByKey)
		if (aggByKey === '') {
			setTableData(data)
			setTableColumns(columns)
		} else aggTableColumnByKey(data, columns, aggSelector, aggByKey)
	}

	const aggTableColumnByKey = useCallback(
		(
			data: Array<any>, //Table Data
			columns: Array<ColumnData>, //Table Columns
			aggSelector: string, //The column to be aggregated
			aggByKey: string // The column to aggregate by.
		) => {
			const aggColumns = columns.filter(col =>
				[aggSelector, aggByKey].includes(col.id)
			)
			setTableColumns(aggColumns)
			const aggregatedDataMap = data.reduce((prev, curr) => {
				if (prev[curr[aggByKey]])
					prev[curr[aggByKey]] += aggFormatter(curr[aggSelector])
				else prev[curr[aggByKey]] = aggFormatter(curr[aggSelector])
				return prev
			}, {})

			const aggregatedDataArr = Object.keys(aggregatedDataMap).map(key => ({
				[aggByKey]: key,
				[aggSelector]: aggregatedDataMap[key],
			}))

			setTableData(aggregatedDataArr)
		},
		[aggFormatter, data]
	)

	const handleSortChange = (sortData: SortData) => {
		setSortBy(sortData)
		sortDataByKey(tableData, sortData)
	}

	const sortDataByKey = useCallback((
		tableData: Array<any>, //Table Data
		sortData: SortData // The column to aggregate by.
	) => {
        const { colId, type } = sortData
		let sortedData = [...tableData]
		switch (type) {
			case SortTypes.ASC:
				sortedData = tableData.sort((a, b) =>
					a[colId] < b[colId] ? -1 : 1
				)
				break
			case SortTypes.DESC:
				sortedData = tableData.sort((a, b) =>
					a[colId] > b[colId] ? -1 : 1
				)
				break
			default:
				break
		}

		setTableData(sortedData as Array<any>)
	}, [sortBy])

	return {
		data: tableData,
		columns: tableColumns,
		aggBy,
		aggOptions,
		aggTotal,
		handleAggChange,
		sortBy,
		handleSortChange,
	}
}

export default useTable
