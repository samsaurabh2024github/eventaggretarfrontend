import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Trash2, Calendar } from 'lucide-react';

const MyEvents = () => {
  const [myRegistrations, setMyRegistrations] = useState([]);

  useEffect(() => {
    const fetchMyEvents = async () => {
      const res = await api.get('/registration/my-events');
      setMyRegistrations(res.data);
    };
    fetchMyEvents();
  }, []);

  const handleCancel = async (eventId) => {
    if (window.confirm("Are you sure you want to cancel?")) {
      await api.delete(`/registration/cancel/${eventId}`);
      setMyRegistrations(prev => prev.filter(reg => reg.event._id !== eventId));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Registered Events</h1>
      <div className="grid gap-4">
        {myRegistrations.map(reg => (
          <div key={reg._id} className="bg-[#1a1a2e] p-6 rounded-2xl border border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-brand-orange/20 p-3 rounded-lg text-brand-orange">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl">{reg.event.title}</h3>
                <p className="text-gray-400">{new Date(reg.event.date).toLocaleDateString()}</p>
              </div>
            </div>
            <button 
              onClick={() => handleCancel(reg.event._id)}
              className="text-red-500 hover:bg-red-500/10 p-3 rounded-xl transition"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;