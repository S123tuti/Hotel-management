import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../../lib/firebase';

const HotelPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [hotelDetails, setHotelDetails] = useState<any>(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const docRef = firestore.collection('hotels').doc(id as string);
        const doc = await docRef.get();
        if (doc.exists) {
          setHotelDetails(doc.data());
        } else {
          console.error('No such hotel!');
        }
      } catch (error) {
        console.error('Error getting hotel details: ', error);
      }
    };

    if (id) {
      fetchHotelDetails();
    }
  }, [id]);

  if (!hotelDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{hotelDetails.name}</h1>
      <p>Email: {hotelDetails.email}</p>
      <p>Phone: {hotelDetails.phone}</p>
      
    </div>
  );
};

export default HotelPage;
