// Hooks
import { useEffect } from 'react';
import { useCrudTableStore } from '../../hooks/useCrudTableStore';

// Components
import { TableData } from '../../components/Table/TableData';

export const OrdersPage = () => {
	const { startLoadingTable } = useCrudTableStore();

	useEffect(() => {
		startLoadingTable('orders');
	}, []);

	return (
		<>
			<TableData />
		</>
	);
};
