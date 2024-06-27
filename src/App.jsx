import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      setUsername(window.Telegram.WebApp.initDataUnsafe.user.username);

      axios.get(`/api/user/${window.Telegram.WebApp.initDataUnsafe.user.username}`)
        .then(response => {
          if (response.data) {
            setCoins(response.data.coins);
          }
        });
    }
  }, []);

  const handleButtonClick = () => {
    const newCoins = coins + 1;
    setCoins(newCoins);
    axios.post('/api/update-coins', { username, coins: newCoins })
      .catch(error => {
        console.error('Error updating coins:', error);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-4">Welcome, {username}</h1>
      <button
        className="bg-blue-500 text-white p-4 rounded-full text-4xl"
        onClick={handleButtonClick}
      >
        {coins}
      </button>
      <div className="mt-4">
        <button className="bg-green-500 text-white p-2 rounded">Invite Friends</button>
        <button className="bg-red-500 text-white p-2 rounded ml-2">Follow on Social Media</button>
      </div>
    </div>
  );
};

export default App;
