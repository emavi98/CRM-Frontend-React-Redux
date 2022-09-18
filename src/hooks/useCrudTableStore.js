import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
	onAddNewProduct,
	onLoadTable,
	onUpdateProduct,
} from '../store/storeSlice';

export const useCrudTableStore = () => {
	const { selectedRecord } = useSelector(state => state.storeData);
	const dispatch = useDispatch();

	/**
	 * It takes a page name as an argument, and then it makes an API call to the corresponding endpoint,
	 * and then it dispatches an action to the reducer
	 */
	const startLoadingTable = async page => {
		switch (page) {
			case 'dashboard': {
				// Customers info
				// const res = await axios.get("");
				 	dispatch(onLoadTable({ page }));
				break;
			}

			case 'customers': {
			//	Customers info
				const res = await axios.get('https://fakestoreapi.com/users');
				 dispatch(onLoadTable({ data: res.data, page }));
				break;
			}

			case 'orders': {
				// Orders info
				const res = await axios.get('https://fakestoreapi.com/carts');
				dispatch(onLoadTable({ data: res.data, page }));
				break;
			}

			case 'products': {
				// Products info
				const res = await axios.get('https://fakestoreapi.com/products');
				dispatch(onLoadTable({ data: res.data, page }));
				break;
			}

			/* A fallback in case the switch statement doesn't match any of the cases. */
			default:
				break;
		}
	};

/**
 * If the selected record has an id, then we're updating an existing record, otherwise we're adding a
 * new record
 */
	const startSavingProduct = () => {
		if (selectedRecord.id) {
			dispatch(onUpdateProduct(selectedRecord));
		} else {
			dispatch(
				onAddNewProduct({ ...selectedRecord, id: new Date().getTime() })
			);
		}
	};

	return {
		startSavingProduct,
		startLoadingTable,
	};
};
