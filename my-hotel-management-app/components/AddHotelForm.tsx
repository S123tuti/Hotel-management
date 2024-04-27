import React, { useState } from 'react';
import { firestore } from '../lib/firebase';

const AddHotelForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await firestore.collection('hotels').add(formData);
      console.log('Hotel added successfully!');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding hotel: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Hotel Name"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Phone"
        required
      />
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default AddHotelForm;
