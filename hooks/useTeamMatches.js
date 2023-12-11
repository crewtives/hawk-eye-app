import { useState, useEffect } from "react";

const useTeamMatches = (teamId) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:3000/teams/${teamId}/matches`
        );
        const { data } = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching team matches:", error);
      }
    };

    fetchMatches();
  }, [teamId]);

  return matches;
};

export default useTeamMatches;
