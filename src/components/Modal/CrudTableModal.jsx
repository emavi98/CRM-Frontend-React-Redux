// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { CustomerForm } from '../../pages/CustomersPage/Components/CustomerForm';
import { ProductForm } from '../../pages/ProductsPage/Components/ProductForm';

// Dispatchs
import { onCloseProductModal } from '../../store/storeSlice';

export const CrudTableModal = () => {
	const { isProductModalOpen, actualPage } = useSelector(
		state => state.storeData
	);
	const dispatch = useDispatch();

	const returnForm = () => {
		switch (actualPage) {
			case 'products':
				return <ProductForm />;
			case 'customers':
				return <CustomerForm />;
			case 'orders':
				return <ProductForm />;

			default:
				break;
		}
	};

	const returnFormId = () => {
		switch (actualPage) {
			case 'products': {
				const idModal = 'ProductModal';
				return idModal;
			}
			case 'customers': {
				const idModal = 'CustomerModal';
				return idModal;
			}
			case 'orders': {
				const idModal = 'OrderModal';
				return idModal;
			}

			default:
				break;
		}
	};

	return (
		<>
			{isProductModalOpen ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/* content */}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/* header */}{' '}
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>Modal Title</h3>
								</div>
								{/* body */}
								<div className='relative p-6 flex-auto'>{returnForm()}</div>
								{/* footer */}
								<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
									<button
										className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										form={returnFormId()}
										type='submit'
										// onSubmit={ onSubmit }
									>
										Save
									</button>
									<button
										className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => dispatch(onCloseProductModal())}
									>
										Close
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
