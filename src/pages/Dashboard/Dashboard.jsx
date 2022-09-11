import { useSelector } from 'react-redux';
import { FabAddNew } from '../../components/Buttons/FabAddNew';
import { CrudTableModal } from '../../components/Modal/CrudTableModal';
import { FeatureModal } from '../../components/Modal/FeatureModal';
import { ModalConfirmation } from '../../components/Modal/ModalConfirmation';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

export const Dashboard = () => {
	const { actualPage } = useSelector(state => state.storeData);

	const showFabAddNew = () => {
		switch (actualPage) {
			case 'dashboard':
				break;
			case 'customers':
				return <FabAddNew />;
			case 'products':
				return <FabAddNew />;
			case 'orders':
				return <FabAddNew />;

			default:
				break;
		}
	};

	return (
		<>
			<Sidebar />
			<Navbar />
			<CrudTableModal />
			{showFabAddNew()}
			<ModalConfirmation />
			<FeatureModal />
		</>
	);
};
