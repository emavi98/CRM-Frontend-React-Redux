// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Dispatchs
import {
	onOpenProductModal,
	onOpenDeleteModal,
	onOpenFeatureModal,
} from '../../store/storeSlice';

export const TableActions = () => {
	const { actualPage } = useSelector(state => state.storeData);
	const dispatch = useDispatch();

	/**
	 * If the actual page is not orders, open the product modal, otherwise open the feature modal
	 * @returns the dispatch of the onOpenProductModal() function.
	 */
	const handleClickEdit = () => {
		if (actualPage !== 'orders') {
			return dispatch(onOpenProductModal());
		}

		dispatch(onOpenFeatureModal());
	};

	const handleClickDelete = () => {
		dispatch(onOpenDeleteModal());
	};

	return (
		<>
			<td className='py-3 px-6 text-center'>
				<div className='flex item-center justify-center'>
					<button
						className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'
						onClick={handleClickEdit}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
							/>
						</svg>
					</button>
					<button
						className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'
						type='button'
						onClick={handleClickDelete}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
							/>
						</svg>
					</button>
				</div>
			</td>
		</>
	);
};
