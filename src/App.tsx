import { Outlet } from 'react-router';
import { AuthProvider } from './context/auth/AuthProvider';
import config from './config';

function App() {
    const defaultApiKey = config.apiKeys.ADMIN;
    return (
        <AuthProvider apiKey={defaultApiKey}>
            <Outlet />
        </AuthProvider>
    );
}

export default App;
