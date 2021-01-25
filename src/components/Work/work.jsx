import React from "react";
import SectionTitle from "../Titles/sectionTitle";
import "./style.css";

const Work = () => {
  return (
    <div id="work">
      <SectionTitle title={"Work History"} color="#ebeeee" />
      <div className="work-container">
        <div className="work-text">
          <p className="work-p p1">Discover Financial Services</p>
          <p className="work-p p2">
            Mobile App Developer - React Native • Jan 2019 – Present
          </p>
          <p className="work-p p3">
            Developed React Native mobile application for both IOS and Android.
          </p>

          <p className="work-p p1">Discover Financial Services</p>
          <p className="work-p p2">Campus Innovator • Aug 2018 – Dec 2018</p>
          <p className="work-p p3">
            Participate and contribute in an agile team to develop a cross
            platform mobile app with a back end server that communicated over
            API. Ensured that it met security, scalability, availability, and
            maintainability needs.
          </p>

          <p className="work-p p1">Central CUSD 301</p>
          <p className="work-p p2">
            IT Support Specialist • Jun 2014 – Jan 2019
          </p>
          <p className="work-p p3">
            Assisted teachers, students, and district administrators, with
            technical support, and troubleshooting on a wide verity of Windows,
            iOS, and ChromeOS devices. Collaborated with other technology
            members to preform hardware and software infrastructure installation
            and upgrades to the network. Created and maintained internal
            scripts, interactive websites, and programs, that were used by
            teachers, technology members, and staff to rworkce work load.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
