import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api/axios';
import { CheckCircle } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await api.get(`/events/${id}`); // You'll need a GET /events/:id route
      setEvent(res.data);
    };
    fetchDetail();
  }, [id]);

 // File: src/pages/EventDetails.jsx
const handleJoin = async () => {
  try {
    // Note: Using params /register/:eventId as defined in your route
    const res = await api.post(`/registration/register/${id}`); 
    alert(res.data.message); // "Registered successfully"
    setJoined(true);
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
};

  if (!event) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-[#1a1a2e] p-10 rounded-3xl border border-gray-800">
        <h1 className="text-5xl font-black mb-6">{event.title}</h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">{event.description}</p>
        
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-[#0f0f1b] p-6 rounded-2xl">
            <p className="text-gray-500 text-sm uppercase font-bold">Location</p>
            <p className="text-xl font-bold">{event.venue}</p>
          </div>
          <div className="bg-[#0f0f1b] p-6 rounded-2xl">
            <p className="text-gray-500 text-sm uppercase font-bold">Capacity</p>
            <p className="text-xl font-bold">{event.maxParticipants} Max Seats</p>
          </div>
        </div>

        {joined ? (
          <div className="bg-green-500/10 border border-green-500 text-green-500 p-6 rounded-2xl flex items-center justify-center gap-3 font-bold">
            <CheckCircle /> You are registered for this event
          </div>
        ) : (
          <button 
            onClick={handleJoin}
            className="w-full py-5 bg-brand-yellow text-black font-black text-xl rounded-2xl hover:scale-[1.02] transition-transform shadow-xl shadow-yellow-500/10"
          >
            Register Now
          </button>
        )}
      </div>
    </div>
  );
};

export default EventDetails;