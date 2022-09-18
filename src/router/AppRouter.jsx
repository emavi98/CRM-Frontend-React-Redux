import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import { LoginPage } from '../pages/Auth/LoginPage';

export const AppRouter = () => {
	const authStatus = 'not-authenticated';
	return (
		<>
			<Routes>
				{authStatus === 'not-autahenticated' ? (
					<>
						<Route path='/auth/*' element={<LoginPage />} />
						<Route path='/*' element={<Navigate to='/auth/login' />} />
					</>
				) : (
					<>
						<Route path='/' element={<App />} />
					</>
				)}
			</Routes>
		</>
	);
};
