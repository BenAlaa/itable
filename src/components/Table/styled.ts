import styled from 'styled-components'

export const TableContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`

const CommonStyles = styled.div`
	display: flex;
	background-color: white;
	border-radius: 0.7rem;
	-webkit-box-shadow: 0px 2px 19px -9px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: 0px 2px 19px -9px rgba(0, 0, 0, 0.32);
	box-shadow: 0px 2px 19px -9px rgba(0, 0, 0, 0.32);
`
export const TableHeader = styled(CommonStyles)`
	width: 100%;
	padding: 1rem;
	justify-content: space-between;
	margin-bottom: 2rem;
`

export const TableTitle = styled.div`
	font-size: 2rem;
	color: #ff7043;
`

export const TableBody = styled(CommonStyles)`
	width: 100%;
	/* padding: 2rem; */
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	max-height: 30rem;
	overflow-y: scroll;
	border-radius: 0;
`

export const ColumnsHeader = styled.div`
	width: 100%;
	background-color: rgba(1, 46, 82, 255);
	padding: 1rem;
	font-size: 1rem;
	font-weight: bold;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top-left-radius: 0.7rem;
	border-top-right-radius: 0.7rem;
`

export const ColumnHeaderCell = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: space-around;
	cursor: pointer;
`

export const Row = styled.div<{ index: number }>`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid #a9a9a982;
	background-color: ${props => (props?.index % 2 === 0 ? 'white' : '#cdcdcd37')};
	&:hover {
		background-color: #bbddf68e;
	}
`

export const Cell = styled.div`
	width: 100%;
	text-align: center;
`

export const Total = styled.div`
	width: 100%;
	font-size: 1.2rem;
	background-color: #ff7043;
	color: white;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	font-weight: bold;
	border-bottom-left-radius: 0.7rem;
	border-bottom-right-radius: 0.7rem;
`

export const AggContainer = styled.div`
	width: 40%;
`
