// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllOrganizers } from '../features/authSlice';
// import api from '../api/axios';
// import { UserCheck, Mail, ShieldAlert } from 'lucide-react';

// const AdminApprovals = () => {
    
//   const dispatch = useDispatch();
//   const { organizersList, loading } = useSelector((state) => state.auth);
// const [pendingEvents, setPendingEvents] = useState([]);
  
// useEffect(() => {
//   const fetchPendingEvents = async () => {
//     // You might need a new backend route for this: GET /api/admin/pending-events
//     const res = await api.get('/admin/pending-events'); 
//     setPendingEvents(res.data);
//   };
//   fetchPendingEvents();
// }, []);


//   useEffect(() => {
//     dispatch(fetchAllOrganizers());
//   }, [dispatch]);

//   const handleApprove = async (userId) => {
//     try {
//       // Calls your backend router.put("/approve/:userId", ...)
//       await api.put(`/admin/approve/${userId}`);
//       alert("Organizer approved!");
//       dispatch(fetchAllOrganizers()); // Refresh the list
//     } catch (err) {
//       alert("Approval failed");
//     }
//   };

//   const handleApproveEvent = async (eventId) => {
//   // Calls your backend: router.put("/approve-event/:eventId", auth, checkRole("admin"), approveEvent);
//   await api.put(`/admin/approve-event/${eventId}`);
//   setPendingEvents(prev => prev.filter(ev => ev._id !== eventId));
//   alert("Event Published!");
// };

//   return (
//     <div className="max-w-5xl mx-auto">
//       <div className="flex items-center gap-4 mb-10">
//         <ShieldAlert className="text-brand-orange" size={32} />
//         <h1 className="text-3xl font-bold">Organizer Management</h1>
//       </div>

//       <div className="space-y-4">
//         {organizersList.map((org) => (
//           <div key={org._id} className="bg-[#1a1a2e] p-6 rounded-2xl border border-gray-800 flex items-center justify-between">
//             <div>
//               <h3 className="font-bold text-lg text-white">{org.name}</h3>
//               <p className="text-gray-400 flex items-center gap-2 text-sm"><Mail size={14}/> {org.email}</p>
//               <span className={`inline-block mt-2 text-[10px] font-bold px-2 py-1 rounded uppercase ${org.status === 'approved' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
//                 {org.status}
//               </span>
//             </div>

//             {org.status === 'pending' && (
//               <button 
//                 onClick={() => handleApprove(org._id)}
//                 className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition"
//               >
//                 <UserCheck size={18} /> Approve
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminApprovals;


import { useEffect, useState } from 'react';
import api from '../api/axios';
import { UserCheck, CalendarCheck, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

const AdminApprovals = () => {
  const [organizers, setOrganizers] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('organizers'); // Toggle between lists

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  try {
    setLoading(true);
    // 1. Fetch Organizers
    const orgRes = await api.get('/admin/organizers');
    setOrganizers(orgRes.data.organizers.filter(u => u.status === 'pending'));

    // 2. Fetch Pending Events from the NEW ADMIN ROUTE
    const eventRes = await api.get('/admin/pending-events'); 
    
    // Since the backend 'getPendingEvents' already filters for 'pending', 
    // you don't need to filter again on the frontend.
    setEvents(eventRes.data); 
    
  } catch (err) {
    console.error("Error fetching admin data", err);
  } finally {
    setLoading(false);
  }
};

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       // Fetch Organizers (Existing)
//       const orgRes = await api.get('/admin/organizers');
//       setOrganizers(orgRes.data.organizers.filter(u => u.status === 'pending'));

//       // Fetch Pending Events (New - matching your backend)
//       // Note: You may need to add a route for GET /api/admin/pending-events in your backend
//       const eventRes = await api.get('/events'); 
//       setEvents(eventRes.data.filter(ev => ev.status === 'pending'));
//     } catch (err) {
//       console.error("Error fetching admin data", err);
//     } finally {
//       setLoading(false);
//     }
//   };

  const approveOrganizer = async (id) => {
    await api.put(`/admin/approve/${id}`);
    setOrganizers(prev => prev.filter(org => org._id !== id));
  };

  const approveEvent = async (id) => {
    // Calls your backend: router.put("/approve-event/:eventId", auth, checkRole("admin"), approveEvent);
    await api.put(`/admin/approve-event/${id}`);
    setEvents(prev => prev.filter(ev => ev._id !== id));
    alert("Event Approved and Published!");
  };

  if (loading) return <div className="p-10 text-center text-gray-400">Loading Management Console...</div>;

  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="text-brand-orange" size={32} />
        <h1 className="text-3xl font-bold">Admin Management Panel</h1>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-4 mb-8 border-b border-gray-800">
        <button 
          onClick={() => setActiveTab('organizers')}
          className={`pb-4 px-2 font-bold transition-all ${activeTab === 'organizers' ? 'border-b-2 border-brand-yellow text-brand-yellow' : 'text-gray-500'}`}
        >
          Pending Organizers ({organizers.length})
        </button>
        <button 
          onClick={() => setActiveTab('events')}
          className={`pb-4 px-2 font-bold transition-all ${activeTab === 'events' ? 'border-b-2 border-brand-yellow text-brand-yellow' : 'text-gray-500'}`}
        >
          Pending Events ({events.length})
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'organizers' ? (
          organizers.length === 0 ? <EmptyState msg="No pending organizer requests." /> :
          organizers.map(org => (
            <div key={org._id} className="bg-[#1a1a2e] p-6 rounded-2xl border border-gray-800 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{org.name}</h3>
                <p className="text-gray-400 text-sm flex items-center gap-2"><Mail size={14}/> {org.email}</p>
              </div>
              <button onClick={() => approveOrganizer(org._id)} className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-xl font-bold transition flex items-center gap-2">
                <UserCheck size={18} /> Approve User
              </button>
            </div>
          ))
        ) : (
          events.length === 0 ? <EmptyState msg="No events waiting for approval." /> :
          events.map(event => (
            <div key={event._id} className="bg-[#1a1a2e] p-6 rounded-2xl border border-gray-800 flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-brand-yellow">{event.title}</h3>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><MapPin size={14}/> {event.venue}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {new Date(event.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-500 text-sm mt-2 max-w-md line-clamp-1">{event.description}</p>
              </div>
              <button onClick={() => approveEvent(event._id)} className="bg-brand-orange hover:opacity-90 px-6 py-2 rounded-xl font-bold transition flex items-center gap-2">
                <CalendarCheck size={18} /> Approve & Publish
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const EmptyState = ({ msg }) => (
  <div className="py-20 text-center bg-[#1a1a2e] rounded-3xl border border-dashed border-gray-800">
    <p className="text-gray-500 italic">{msg}</p>
  </div>
);

export default AdminApprovals;