// Hooks

import { useDispatch } from 'react-redux';
import { onOpenProductModal } from '../../store/storeSlice';

export const FabAddNew = () => {
	const dispatch = useDispatch();

	const handleClickNew = () => {
		dispatch(onOpenProductModal(true));
	};

	return (
		<>
			<button
				className='fixed z-90 bottom-2 right-5 bg-cyan-300 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-sky-300 hover:drop-shadow-2xl'
				onClick={handleClickNew}
			>
				<i className=''>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 4v16m8-8H4'
						/>
					</svg>
				</i>
			</button>
		</>
	);
};

export default FabAddNew;
