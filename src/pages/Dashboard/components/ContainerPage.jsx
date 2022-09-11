import { Route, Routes /* , Navigate */ } from 'react-router-dom';
import { CustomersPage } from '../../CustomersPage/CustomersPage';
import { OrdersPage } from '../../OrdersPage/OrdersPage';
import { ProductsPage } from '../../ProductsPage/ProductsPage';
import { DashboardPage } from '../DashboardPage';

export const ContainerPage = () => {
	return (
		<>
			<div className='px-6 pt-3 2xl:container'>
				<div className='flex justify-center  border-gray-300 rounded-xl'>
					{/* <TableProject/> */}
					<Routes>
						<Route path='dashboard' element={<DashboardPage />} />
						<Route path='customers' element={<CustomersPage />} />
						<Route path='orders' element={<OrdersPage />} />
						<Route path='products' element={<ProductsPage />} />
						{/* <Route path="/*" element={ <Navigate to="/" /> } />  */}
					</Routes>
				</div>
			</div>
		</>
	);
};
