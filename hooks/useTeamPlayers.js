import { useState, useEffect } from "react";

const useTeamPlayers = (teamId) => {
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const fetchTeamPlayers = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:3000/teams/${teamId}/players`
        );
        const { data } = await response.json();
        setTeamPlayers(data);
      } catch (error) {
        console.error("Error fetching team players:", error);
      }
    };

    fetchTeamPlayers();
  }, []);

  return teamPlayers;
};

export default useTeamPlayers;
