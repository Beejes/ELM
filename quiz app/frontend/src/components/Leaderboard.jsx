// Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch('http://localhost:5000/api/scores/leaderboard/:testId');
      const data = await response.json();
      setLeaderboard(data);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaders in the Field</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={entry._id}>
              <td>{index + 1}</td>
              <td>{entry.user[0]?.username}</td>
              <td>{entry.maxScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;