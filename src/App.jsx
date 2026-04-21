import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

import BrowseEvents from './pages/BrowseEvents';
import EventDetails from './pages/EventDetails';

import ProtectedRoute from './components/ProtectedRoute';
import AdminApprovals from './pages/AdminApprovals';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/MyEvents';
import AboutPage from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<BrowseEvents />} />
          <Route path="event/:id" element={<EventDetails />} />
          <Route path="leaderboard" element={<div>Leaderboard Page</div>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutPage />} />

          <Route 
            path="admin/approvals" 
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminApprovals />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="create-event" 
            element={
              <ProtectedRoute allowedRole="organizer">
                <CreateEvent />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="my-events" 
            element={
              <ProtectedRoute allowedRole="student">
                <MyEvents />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;