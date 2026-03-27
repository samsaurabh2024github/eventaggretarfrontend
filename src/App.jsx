import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Register from './pages/Register';
import Login from './pages/Login';

import BrowseEvents from './pages/BrowseEvents';
import EventDetails from './pages/EventDetails';

import ProtectedRoute from './components/ProtectedRoute';
import AdminApprovals from './pages/AdminApprovals';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/MyEvents';

// Temporary placeholder for the Home Page
const HomePlaceholder = () => (
  <div className="py-20 text-center">
    <h1 className="text-6xl font-black mb-4">
      Transform Your Events <br />
      With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Real-Time Engagement</span>
    </h1>
    <p className="text-gray-400 text-lg">Your events, reimagined.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePlaceholder />} />
          <Route path="browse" element={<BrowseEvents />} />
<Route path="event/:id" element={<EventDetails />} />
          <Route path="leaderboard" element={<div>Leaderboard Page</div>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

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
          <Route path="browse" element={<div>Browse Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;