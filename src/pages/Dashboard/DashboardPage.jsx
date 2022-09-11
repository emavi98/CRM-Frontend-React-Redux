import { useEffect } from 'react';
import { BlockCardInfo } from '../../components/Cards/BlockCardInfo';
import { useCrudTableStore } from '../../hooks/useCrudTableStore';

export const DashboardPage = () => {
	const { startLoadingTable } = useCrudTableStore();

	useEffect(() => {
		startLoadingTable('dashboard');
	}, []);

	return <BlockCardInfo />;
};
