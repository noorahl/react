import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
import Layout from './components/Layout';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Demo from './views/Demo';
import Login from './views/Login';
import {UserProvider} from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

// TODO: Suojaa kaikki tarvittavat reitit (Protected Routes)

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/upload" element={<Upload />} />
            <Route path="/single" element={<Single />} />
            <Route path="/login" element={<Login />} />
            <Route path="/demo" element={<Demo />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
export default App;
