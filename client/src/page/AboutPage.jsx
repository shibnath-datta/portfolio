import React, { useEffect } from "react";
import AboutSection from "./../components/AboutSection";
import TeamSection from "./../components/TeamSection";
import TeamStore from "./../store/TeamStore";

function AboutPage() {
  const { TeamListRequest } = TeamStore();

  useEffect(() => {
    (async () => {
      await TeamListRequest();
    })();
  }, []);
  return (
    <>
      {/*About Page*/}
      <AboutSection />
      {/*Team Page*/}
      <TeamSection />
    </>
  );
}

export default AboutPage;
