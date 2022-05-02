import React, { FC } from 'react'
import ColumnHeader from './ColumnHeader'
import SelectInput from '../Select'
import {
	TableContainer,
	TableHeader,
	TableTitle,
	TableBody,
	ColumnsHeader,
	Row,
	Cell,
	Total,
	AggContainer,
} from './styled'
import {getSortType} from '../../utils'
import { ColumnData, Option, SortData, SortTypes, TableTotal } from '../../types'

interface TableProps {
	title: string
	columns: ColumnData[]
	data: any[]
	hasAggregator: boolean
	aggregatorLabel: string
	aggByKey: string
	aggOptions: Array<Option>
	handleAggChange: (value: string) => void
	aggTotal: TableTotal
	sortBy: SortData | null;
	handleSortChange: (sortBy: SortData) => void
  //TODO
	//hasPagination: boolean;
	//paginationHandler: () => any;
	//hasColumnSearch: () => any;
	//columnSearchHandler: () => any;
	// globaFilter: any
	// globalFilterHandler: () => any
	// actions: {
	//   delete: TableAction,
	//   edit: TableAction,
	//   add: TableAction
	// }
}

const Table: FC<TableProps> = ({
	title,
	columns,
	data,
	hasAggregator,
	aggregatorLabel,
	aggByKey,
	aggOptions,
	handleAggChange,
	aggTotal,
	sortBy,
	handleSortChange,
}) => {

	return (
		<TableContainer>
			<TableHeader>
				<TableTitle>{title}</TableTitle>
				{hasAggregator && (
					<AggContainer>
						<SelectInput
							id='agg'
							name='agg'
							label={aggregatorLabel}
							value={aggByKey}
							options={aggOptions}
							defaultOption={{ label: 'None', value: '' }}
							handleChange={handleAggChange}
						/>
					</AggContainer>
				)}
			</TableHeader>
				<ColumnsHeader>
					{columns?.map(({ id, title, hasSort = false }) => (
						<ColumnHeader
							key={id}
							id={id}
							title={title}
							hasSort={hasSort}
							sortType={getSortType(id, sortBy)}
							onSortChange={handleSortChange}
						/>
					))}
				</ColumnsHeader>
			<TableBody>
				{data?.map((row, index) => {
					return (
						<Row key={index} index={index}>
							{columns.map(({ id }) => (
								<Cell key={id}>{row[id]}</Cell>
							))}
						</Row>
					)
				})}
			</TableBody>
				<Total>
					<div>{aggTotal.label}</div>
					<div>{aggTotal.value}</div>
				</Total>
		</TableContainer>
	)
}

export default Table
