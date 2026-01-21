import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { AppProviders } from '@/context/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </AppProviders>
  );
}

export default App;
