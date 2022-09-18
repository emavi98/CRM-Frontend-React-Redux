import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
	name: 'storeData',
	initialState: {
		// Pages
		actualPage: 'dashboard',

		// Modals
		isProductModalOpen: false,
		isModalActionOpen: false,
		isNeWProduct: false,
		isModalFeatureOpen: false,

		// Tables
		infoData: [],
		infoColumns: [],
		selectedRecord: [],
		showSelectedrow: false,
		dataList: [],
	},
	reducers: {
		// Pages
		onChangeView: (state, payload) => {},

		// Modals
		onOpenProductModal: (state, { payload }) => {
			state.isNeWProduct
				? (state.isProductModalOpen = true)
				: (state.isProductModalOpen = true);
			// state.selectedRecord = [{title: '',category: '',description: '',image:'',price:''}]
		},
		onCloseProductModal: state => {
			state.isProductModalOpen = false;
			state.selectedRecord = [];
		},

		onOpenDeleteModal: state => {
			state.isModalActionOpen = true;
		},

		onCloseDeleteModal: state => {
			state.isModalActionOpen = false;
		},

		onOpenFeatureModal: state => {
			state.isModalFeatureOpen = true;
		},

		onCloseFeatureModal: state => {
			state.isModalFeatureOpen = false;
		},

		// Tables
		onLoadTable: (state, { payload }) => {
			switch (payload.page) {
				case 'dashboard':
					state.actualPage = payload.page;
					break;

				case 'customers':
					state.actualPage = payload.page;
					state.dataList = payload.data;
					state.infoData = payload.data;
					state.infoColumns = Object.keys(payload.data[0])
						.filter(
							key =>
								// Exceptions
								key !== 'name' && key !== 'address' && key !== '__v'
						)
						.map(key => {
							return { Header: key, accessor: key };
						});
					break;

				case 'orders':
					state.actualPage = payload.page;
					state.dataList = payload.data;
					state.infoData = payload.data;
					state.infoColumns = Object.keys(payload.data[0])
						.filter(
							key =>
								// Exceptions
								key !== 'products' && key !== '__v'
						)
						.map(key => {
							return { Header: key, accessor: key };
						});

					break;

				case 'products':
					state.actualPage = payload.page;
					state.dataList = payload.data;
					state.infoData = payload.data;
					state.infoColumns = Object.keys(payload.data[0])
						.filter(key => key !== 'rating' /* Exceptions  && key !== "price" */)
						.map(key => {
							return { Header: key, accessor: key };
						});

					break;

				default:
					break;
			}
		},

		onSelectRecord: (state, { payload }) => {
			state.selectedRecord = payload;
			console.log(state.selectedRecord);
		},

		// CRUD Table
		onAddNewProduct: (state, { payload }) => {
			state.infoData.push(payload);
			state.selectedRecord = [];
			state.isProductModalOpen = false;
		},
		onUpdateProduct: (state, { payload }) => {
			state.infoData = state.infoData.map(product => {
				if (product.id === payload.id) {
					return payload;
				}
				return product;
			});
			state.isProductModalOpen = false;
		},

		onDeleteProduct: (state, { payload }) => {
			state.infoData = state.infoData.filter(
				product => product.id !== state.selectedRecord.id
			);
			state.selectedRecord = null;
			state.isModalActionOpen = false;
		},


		// Sidebar

		onClickSidebar: ( state, { payload }) => {
			state.actualPage = payload
		}
	}, // Reducers End
});

// Action creators are generated for each case reducer function
export const {
	// Pages
	onChangeView,

	// Modals
	onOpenProductModal,
	onCloseProductModal,
	onOpenFeatureModal,

	onOpenDeleteModal,
	onCloseDeleteModal,

	// Table
	onLoadTable,
	onSelectRecord,

	// CRUD Table
	onAddNewProduct,
	onUpdateProduct,
	onDeleteProduct,
	onCloseFeatureModal,

	// Sidebar
	onClickSidebar
} = storeSlice.actions;


