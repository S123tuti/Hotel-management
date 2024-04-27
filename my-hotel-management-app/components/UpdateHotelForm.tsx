import React, { useState } from 'react';
import { firestore } from '../lib/firebase';

const UpdateHotelForm: React.FC<{ hotelId: string }> = ({ hotelId }) => {
  const [name, setName] = useState('');

  const handleUpdate = async () => {
    try {
      await firestore.collection('hotels').doc(hotelId).update({ name });
      console.log('Hotel name updated successfully!');
      setName('');
    } catch (error) {
      console.error('Error updating hotel name: ', error);
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
};

export default UpdateHotelForm;
