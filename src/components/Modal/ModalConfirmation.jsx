// Hooks
import { useSelector, useDispatch } from 'react-redux';

// Dispatchs
import { onDeleteProduct, onCloseDeleteModal } from '../../store/storeSlice';

export const ModalConfirmation = () => {
	const { selectedProduct, isModalActionOpen } = useSelector(
		state => state.storeData
	);
	const dispatch = useDispatch();
	const handleClickDelete = () => {
		dispatch(onDeleteProduct(selectedProduct));
	};
	const handleClickCancel = () => {
		dispatch(onCloseDeleteModal());
	};

	return (
		<>
			{isModalActionOpen ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/* content */}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/* header */}
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>Modal Title</h3>
								</div>
								{/* body */}
								<div className='relative p-6 flex-auto'>
									<h1>Are you sure you want to delete this item? </h1>
								</div>
								{/* footer */}
								<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
									<button
										className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={handleClickDelete}
									>
										Delete
									</button>
									<button
										className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={handleClickCancel}
									>
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
};
