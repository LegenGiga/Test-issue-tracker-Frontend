import { Outlet } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import config from './config';

function App() {
    console.log(config.apiKeys.ADMIN);

    return (
        <AuthProvider apiKey={config.apiKeys.ADMIN}>
            <Outlet />
        </AuthProvider>
    );
}

export default App;
