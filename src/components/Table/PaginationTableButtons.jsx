export const PaginationTableButtons = ({
	canPreviousPage,
	canNextPage,
	nextPage,
	previousPage,
	pageIndex,
	pageCount,
	pageSize,
	gotoPage,
	pageOptions,
	setPageSize,
}) => {
	return (
		<div className=' my-2'>
			<button
				className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
				onClick={() => gotoPage(0)}
				disabled={!canPreviousPage}
			>
				{'<<'}
			</button>{' '}
			<button
				className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
				onClick={() => previousPage()}
				disabled={!canPreviousPage}
			>
				{'<'}
			</button>{' '}
			<button
				className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
				onClick={() => nextPage()}
				disabled={!canNextPage}
			>
				{'>'}
			</button>{' '}
			<button
				className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
				onClick={() => gotoPage(pageCount - 1)}
				disabled={!canNextPage}
			>
				{'>>'}
			</button>{' '}
			<span>
				Page{' '}
				<strong>
					{pageIndex + 1} of {pageOptions.length}
				</strong>{' '}
			</span>
			<span>
				| Go to page:{' '}
				<input
					className='border'
					type='number'
					defaultValue={pageIndex + 1}
					onChange={e => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0;
						gotoPage(page);
					}}
					style={{ width: '100px' }}
				/>
			</span>{' '}
			<select
				value={pageSize}
				onChange={e => {
					setPageSize(Number(e.target.value));
				}}
			>
				{[10, 20, 30, 40, 50].map(pageSize => (
					<option key={pageSize} value={pageSize}>
						Show {pageSize}
					</option>
				))}
			</select>
		</div>
	);
};
