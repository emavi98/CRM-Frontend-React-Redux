/* eslint-disable react/jsx-key */
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import {
	useTable,
	useGlobalFilter,
	useFilters,
	useSortBy,
	usePagination,
} from 'react-table';

// Dispatchs
import { onSelectRecord } from '../../store/storeSlice';

// Components
// import { GlobalFilter } from './GlobalFilter';
import { PaginationTableButtons } from './PaginationTableButtons';
import { TableActions } from './TableActions';

/* Importing the data from the store and the dispatch function. */
export const TableData = () => {
	const { infoData, infoColumns } = useSelector(state => state.storeData);
	const dispatch = useDispatch();

	/* A hook that returns an object with all the methods and properties that we need to render the table. */
	const tableInstance = useTable(
		{ columns: infoColumns, data: infoData },
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state,
		// setGlobalFilter,
	} = tableInstance;

	const { /* globalFilter, */ pageIndex, pageSize } = state;

	return (
		<>
			<div className='overflow-auto  bg-white shadow-md rounded h-[75vh]'>
				{/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />  */}
				<table {...getTableProps()} className='table-fixed w-full '>
					<thead className=''>
						{
							// Loop over the header page
							headerGroups.map(headerGroup => (
								<tr
									{...headerGroup.getHeaderGroupProps()}
									className='sticky  bg-gray-200 text-gray-600 uppercase text-sm leading-normal  '
								>
									<th className='py-3  w-32  '>Actions</th>
									{
										// Loop over the headers in each row
										headerGroup.headers.map(column => (
											<th
												className='py-3 text-left border-sky-500'
												{...column.getHeaderProps(
													column.getSortByToggleProps()
												)}
											>
												{
													// Render the header
													column.render('Header')
												}
												<span>
													{column.isSorted
														? column.isSortedDesc
															? '↑'
															: '↓'
														: ''}
												</span>

												{/* Filtro por columna */}
												{/* <div>{column.canFilter ? column.render('Filter'): null}</div> */}
											</th>
										))
									}
								</tr>
							))
						}
					</thead>
					<tbody
						{...getTableBodyProps()}
						className='text-gray-600 text-sm font-light'
					>
						{
							// Loop over the table page
							page.map(row => {
								prepareRow(row);
								return (
									<tr
										{...row.getRowProps()}
										className='border-b  border-gray-200 hover:bg-gray-100 '
										onClick={() => {
											dispatch(onSelectRecord(row.original));
										}}
									>
										<TableActions />
										{
											// Loop over the page cells
											row.cells.map((cell, idx) => (
												<td
													{...cell.getCellProps()}
													className='py-3 px-2  border whitespace-nowrap overflow-hidden'
												>
													{cell.render('Cell')}
												</td>
											))
										}
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<PaginationTableButtons
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageOptions={pageOptions}
				pageCount={pageCount}
				gotoPage={gotoPage}
				nextPage={nextPage}
				previousPage={previousPage}
				pageIndex={pageIndex}
				pageSize={pageSize}
				setPageSize={setPageSize}
			/>
		</>
	);
};
