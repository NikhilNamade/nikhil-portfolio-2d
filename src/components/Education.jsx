import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { educationpng } from "../assets/index.js";

const Education = () => {
  const educationTimeline = [
    {
      level: "SSC (10th)",
      institute: "Swami Muktanand High School",
      duration: "2019 – 2020",
      points: [
        "Completed Secondary School Certificate (SSC) curriculum",
        "Achieved an overall score of 88.6%",
      ],
    },
    {
      level: "HSC (12th)",
      institute: "NG Acharya & D.K. Marathe College",
      duration: "2021 – 2022",
      points: [
        "Completed Higher Secondary Certificate (HSC) in Science stream",
        "Secured an overall score of 62.6%",
      ],
    },
    {
      level: "Bachelor of Engineering (Information Technology)",
      institute: "Terna Engineering College",
      duration: "2022 – 2026",
      points: [
        "Pursuing BE in Information Technology with strong focus on software development",
        "Current CGPA: 8.3",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="
        w-full
        bg-[#020617]
        text-white
        flex
        flex-col
        items-center
        px-4 sm:px-6
        py-16 sm:py-20
      "
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
        Education
      </h2>

      <VerticalTimeline>
        {educationTimeline.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={education.duration}
      iconStyle={{ background: "white" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={educationpng}
            alt={education.level}
            className="
              w-[55%] h-[55%]
              sm:w-[60%] sm:h-[60%]
              object-contain
            "
          />
        </div>
      }
    >
      {/* Title */}
      <h3 className="text-white text-[18px] sm:text-[22px] font-bold">
        {education.level}
      </h3>

      {/* Institute */}
      <p className="text-gray-300 text-[14px] sm:text-[16px] font-semibold mt-1">
        {education.institute}
      </p>

      {/* Points */}
      <ul className="mt-3 sm:mt-4 list-disc ml-4 sm:ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={index}
            className="text-gray-200 text-[13px] sm:text-[14px] tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default Education;
