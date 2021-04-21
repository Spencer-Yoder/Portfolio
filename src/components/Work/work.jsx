import React from "react";
import SectionTitle from "../Titles/sectionTitle";
import "./style.css";

const Work = () => {
  return (
    <div id="work">
      <SectionTitle title={"Work History"} color="#ebeeee" />
      <div className="work-container">
        <div className="work-text">
          <p className="work-p1">Divvy</p>
          <p className="work-p2">
            Mobile Engineer II • April 2021 – Present
          </p>
          <p className="work-p3">
            Developed React Native mobile application for both IOS and Android.
          </p>

          <p className="work-p1">Discover Financial Services</p>
          <p className="work-p2">
            Mobile App Developer - React Native • Jan 2019 – April 2021
          </p>
          <p className="work-p3">
            Created elegant UI features using React Native for the award winning Discover Android and iOS Mobile App with over 15 million downloads on the app stores. This provided customers a great user experience when accessing their Discover accounts. I was able to use data analytics from users sessions and crash reporting data, to improve the overall experience in the app. Using a testing first mentality, all new code that I wrote was 100% tested using unit and e2e automation testing. I worked on and maintained, the CI/CD pipeline on GitHub Actions to create a highly automated developer workflow. This in turn helped provide the business the most value, and time to create new and advanced features. I have advanced my knowledge of agile and have lead many ceremonies, to keep projects and goals on schedule.
          </p>

          <p className="work-p1">Discover Financial Services</p>
          <p className="work-p2">Campus Innovator • Aug 2018 – Dec 2018</p>
          <p className="work-p3">
            Participate and contribute in an agile team to develop a cross
            platform mobile app with a back end server that communicated over
            API. Ensured that it met security, scalability, availability, and
            maintainability needs.
          </p>

          <p className="work-p1">Central CUSD 301</p>
          <p className="work-p2">IT Support Specialist • Jun 2014 – Jan 2019</p>
          <p className="work-p3">
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
