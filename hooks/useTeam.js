import { useState, useEffect } from "react";

const useTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/teams", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { data } = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  return teams;
};

export default useTeam;
