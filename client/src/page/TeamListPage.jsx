import React, { useEffect } from "react";
import { TeamList } from "../components/dashboard/team/TeamList";
import TeamStore from "../store/TeamStore";

const TeamListPage = () => {
  const { TeamListRequest } = TeamStore();

  useEffect(() => {
    (async () => {
      await TeamListRequest();
    })();
  }, []);
  return (
    <>
      {/*Team list Component*/}
      <TeamList />
    </>
  );
};

export default TeamListPage;
