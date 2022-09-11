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

	const startLoadingTable = async page => {
		switch (page) {
			case 'dashboard': {
				// Customers info
				// const res = await axios.get("");
				dispatch(onLoadTable({ page }));
				break;
			}

			case 'customers': {
				// Customers info
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

			default:
				break;
		}
	};

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
