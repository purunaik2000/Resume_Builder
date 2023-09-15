import { useContext } from "react";
import "./Resume.css";
import { UserContext } from "../../main";
import Button from "../../components/Button/Button";

import { usePDF } from "react-to-pdf";

// const Component = () => {
//    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
//    return (
//       <div>
//          <button onClick={() => toPDF()}>Download PDF</button>
//          <div ref={targetRef}>
//             Content to be generated to PDF
//          </div>
//       </div>
//    )
// }

let data = {
  name: "Rahul Sharma",
  title: "Backend-Developer",
  mobile: "9898989898",
  email: "testmail12@gmail.com",
  linkedIn: "profile/test",
  address: "Test, India",
  about:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur magnam temporibus in voluptate placeat incidunt at ipsum, architecto labore, saepe magni sit. Error adipisci veniam nostrum dicta id labore voluptate?",
  education: [
    {
      degree: "Graduation",
      institute: "IIT Kharagpur",
      yearOfPassing: 2017,
      percentage: 65,
    },
    {
      degree: "Intermediate",
      institute: "IIT Kharagpur",
      yearOfPassing: 2014,
      percentage: 65,
    },
    {
      degree: "Matriculation",
      institute: "IIT Kharagpur",
      yearOfPassing: 2012,
      percentage: 65,
    },
  ],
  skills: ["JavaScript", "ReactJS", "Nodejs", "MongoDB", "ExpressJS"],
  experience: [
    {
      companyName: "ABC",
      designation: ["Software Engineer"],
      duration: {
        from: "Aug-2019",
        to: "Jun-2020",
      },
      detail:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur magnam temporibus in voluptate placeat incidunt at ipsum, architecto labore, saepe magni sit. Error adipisci veniam nostrum dicta id labore voluptate?",
    },
    {
      companyName: "ABC",
      designation: ["Software Engineer"],
      duration: {
        from: "Aug-2019",
        to: "Jun-2020",
      },
      detail:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur magnam temporibus in voluptate placeat incidunt at ipsum, architecto labore, saepe magni sit. Error adipisci veniam nostrum dicta id labore voluptate?",
    },
    {
      companyName: "ABC",
      designation: ["Software Engineer"],
      duration: {
        from: "Aug-2019",
        to: "Jun-2020",
      },
      detail:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur magnam temporibus in voluptate placeat incidunt at ipsum, architecto labore, saepe magni sit. Error adipisci veniam nostrum dicta id labore voluptate?",
    },
  ],
  image:
    "https://insertface.com/fb/691/men-passport-size-photo-691305-ffssw-fb.jpg",
};

export default function Resume() {
  const { state, actions } = useContext(UserContext);
  // const {data} = state;
  const { toPDF, targetRef } = usePDF({filename: data.name+'-resume.pdf', method: 'open'});
  return (
    <div className="resume-page">
      <div ref={targetRef} className="grid-container">
        <div className=" grid-item img-container">
          <img src={data.image} alt="profile" />
        </div>

        <div className=" grid-item name-container">
          <div className="user-name">{data.name}</div>
          <div className="user-title">{data.title}</div>
        </div>

        <div className=" grid-item contact-container">
          <div className="section-heading">Contact</div>
          <hr />
          <div className="details">
            <div>Mobile: {data.mobile}</div>
            <div>Email: {data.email}</div>
            <div>LinkedIn: {data.linkedIn}</div>
            <div>Address: {data.address}</div>
          </div>
        </div>

        <div className=" grid-item profile-container">
          <div className="section-heading">Profile</div>
          <hr />
          <div className="details">
            <p>{data.about}</p>
          </div>
        </div>

        <div className=" grid-item education-container">
          <div className="section-heading">Education</div>
          <hr />
          <div className="details">
            {data.education?.map((obj, i) => (
              <div className="edu-container" key={`edu-${i}`}>
                <div className="edu-title">
                  <span>{obj.degree}</span>
                  <span>{obj.yearOfPassing}</span>
                </div>

                <div>{obj.institute}</div>

                <div>{obj.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className=" grid-item experience-container">
          <div className="section-heading">Experience</div>
          <hr />
          <div className="details">
            {data.experience?.map((obj, i) => (
              <div className="exp-container" key={`exp-${i}`}>
                <div className="exp-title">
                  <span>{obj.companyName}</span>
                  <span>{`${obj.duration.from}-${obj.duration.to}`}</span>
                </div>

                <div className="designation">{obj.designation}</div>

                <div>{obj.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className=" grid-item skills-container">
          <div className="section-heading">Skills</div>
          <hr />
          <div className="details">
            <ul>
              {data.skills?.map((skill, i) => (
                <div key={`skill-${i}`}>
                  <li className="skill">{skill}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button text='Download' onClick={toPDF} />
    </div>
  );
}
