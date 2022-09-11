// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useCrudTableStore } from '../../../hooks/useCrudTableStore';

// Dispatchs
import { onSelectRecord } from '../../../store/storeSlice';

export const CustomerForm = () => {
	// Selector
	const { startSavingProduct } = useCrudTableStore();
	const { selectedRecord } = useSelector(state => state.storeData);
	const dispatch = useDispatch();

	const onInputChange = ({ target }) => {
		// console.log(selectedRecord);
		const { name, value } = target;
		dispatch(onSelectRecord({ ...selectedRecord, [name]: value }));
	};

	const onSubmit = event => {
		// console.log(selectedRecord);
		event.preventDefault();
		startSavingProduct();
	};

	return (
		<form id='CustomerModal' onSubmit={onSubmit}>
			<div className='relative z-0 mb-6 w-full group'>
				<input
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
					placeholder=' '
					required=''
					type='text'
					name='email'
					id='floating_title'
					value={selectedRecord.email}
					onChange={onInputChange}
				/>
				<label
					htmlFor='floating_title'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Email
				</label>
			</div>

			<div className='relative z-0 mb-6 w-full group'>
				<input
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
					placeholder=' '
					required=''
					type='text'
					name='username'
					id='floating_description'
					value={selectedRecord.username}
					onChange={onInputChange}
				/>
				<label
					htmlFor='floating_description'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Username
				</label>
			</div>

			<div className='relative z-0 mb-6 w-full group'>
				<input
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
					placeholder=' '
					required=''
					type='text'
					name='password'
					id='floating_description'
					value={selectedRecord.password}
					onChange={onInputChange}
				/>
				<label
					htmlFor='floating_description'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Password
				</label>
			</div>

			<div className='relative z-0 mb-6 w-full group'>
				<input
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
					type='text'
					name='phone'
					id='floating_category'
					placeholder=' '
					required=''
					value={selectedRecord.phone}
					onChange={onInputChange}
				/>
				<label
					htmlFor='floating_category'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Phone
				</label>
			</div>
		</form>
	);
};
