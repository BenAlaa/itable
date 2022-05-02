import React, { FC } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import {HiOutlineSortAscending, HiOutlineSortDescending} from 'react-icons/hi'
import { ColumnHeaderCell } from './styled'
import { SortData, SortTypes } from '../../types'

interface ColumnHeaderProps {
	id: string
	title: string
	hasSort: boolean,
    sortType: SortTypes,
	onSortChange: (sortBy: SortData) => void
}

const ColumnHeader: FC<ColumnHeaderProps> = ({
	id,
	title,
	hasSort = false,
    sortType,
	onSortChange,
}) => {
	// const [sortType, setSortType] = useState<SortTypes>(SortTypes.NONE)
	const handleSortChange = (): void => {
		let newSortType = SortTypes.NONE
		if (sortType === SortTypes.NONE) newSortType = SortTypes.ASC
		else if (sortType === SortTypes.ASC) newSortType = SortTypes.DESC
		onSortChange({ colId: id, type: newSortType })
	}
    const SortIcon = () => {
        switch (sortType) {
            case SortTypes.NONE:
                return <BiSortAlt2 />
            case SortTypes.ASC:
                return <HiOutlineSortAscending /> 
            case  SortTypes.DESC:
                return <HiOutlineSortDescending />
            default:
                return null;
        }
    }
	return (
		<ColumnHeaderCell key={id} onClick={handleSortChange}>
			<div>{title}</div>
			{hasSort && <SortIcon/>}
		</ColumnHeaderCell>
	)
}

export default ColumnHeader
