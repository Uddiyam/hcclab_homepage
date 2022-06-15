import React from "react";
import styles from "../styles/Professor.module.css";
import Header from "../components/Header";
import ProfessorListMap from "../components/ProfessorListMap";

export default function Professor() {
  var Research_Interests = [
    { context: "Human-Computer Interaction" },
    { context: "AI for Learning and Rehabilitation" },
    { context: "Digital Equity and Accessible Computing" },
    { context: "Customer Experience Management (CXM)" },
    { context: "Automotive UI" },
  ];

  var Work_Experience = [
    {
      year_start: "2020.09",
      year_end: "now",
      context:
        "Assistant Professor, School of Information Convergence, Kwangwoon University, Seoul, South Korea",
    },
    {
      year_start: "2019.01",
      year_end: "2020.08",
      context:
        "Senior Engineer, Customer Experience Strategy Group, SAMSUNG SDS, Seoul, South Korea",
    },
    {
      year_start: "2012.01",
      year_end: "2018.12",
      context:
        "Teaching & Research Assistant, Pohang University of Science and Technology (POSTECH), Pohang, South Korea",
    },
    {
      year_start: "2014.01",
      year_end: "2015.02",
      context: "Co-founder (CTO), Beemeal",
    },
    {
      year_start: "2013.07",
      year_end: "2013.08",
      context: "Summer Internship, REDSTAR VENTURES, Boston, US",
    },
    {
      year_start: "2012.07",
      year_end: "2013.02",
      context: "Co-founder (CTO), Funsumer",
    },
    {
      year_start: "2011.03",
      year_end: "2011.08",
      context: "Intern, i-Care, Sydney, Australia",
    },
    {
      year_start: "2010.08",
      year_end: "2013.02",
      context: "Member, SAMSUNG Software Membership",
    },
  ];

  var Education = [
    {
      year_start: "2012.03",
      year_end: "2019.02",
      context:
        "Ph.D. in HCI/UX (Convergence IT Engineering), Pohang University of Science and Technology (POSTECH)",
    },
    {
      year_start: "2006.03",
      year_end: "2012.02",
      context:
        "B.S. in Computer Science and Engineering, Kyungpook National University (National Full Scholarship)",
    },
    {
      year_start: "2003.03",
      year_end: "2006.02",
      context: "Daegu High School",
    },
  ];

  var Professional_Activities = [
    {
      type: { title: "Member" },
      list: [
        { context: "Ergonomics Society of Korea" },
        { context: "HCI Society of Korea" },
        { context: "Korean Institute of Industrial Engineers" },
        {
          context:
            "Korean Society of Augmentative and Alternative Communication",
        },
      ],
    },
    {
      type: { title: "Reviewer" },
      list: [
        { context: "IEEE Transactions on Software Engineering (SCIE)" },
        { context: "Behaviour & Information Technology (SSCI)" },
        { context: "Mobile Information Systems (SCIE)" },
        {
          context:
            "International Review of Research in Open and Distributed Learning (SSCI)",
        },
        {
          context: "International Journal of Automotive Technology (SCIE)",
        },
        {
          context: "Applied Sciences (SCIE)",
        },
        {
          context: "Universal Access in the Information Society (SSCI)",
        },
      ],
    },
    {
      type: { title: "Organization Committee" },
      list: [
        { context: "Program Committee Chair, HCI Korea 2022 Conference" },
        {
          context:
            "Doctoral Consortium Committee, International Conference on Computers in Education 2014",
        },
      ],
    },
  ];

  var Invited_Talks = [
    {
      year: "2020",
      title: "Recommendation System",
      context: "Ewha Womans University",
    },
    {
      year: "2020",
      title: "HCI and AI",
      context: "Pusan National University",
    },
    {
      year: "2020",
      title: "HCI in B2B sector",
      context: "Dept. of Industrial & Management Engineering, POSTECH",
    },
    {
      year: "2019",
      title: "UX Design in perspective of Engineer",
      context:
        "Dept. of Industrial & Management Engineering, Incheon National University",
    },
    {
      year: "2017",
      title: "User Segmentation with Clustering Technique",
      context: "Dept. of Industrial & Management Engineering, POSTECH",
    },
    {
      year: "2016",
      title: "Introduction to Computer Engineering and App development",
      context: "Dept. of Educational Technology, Ewha Womans University",
    },
  ];

  var Awards = [
    {
      year: "2017",
      prize: "2",
      context: "Excellent Paper Award",
      context1: "Ergonomics Society of Korea",
    },
    {
      year: "2016",
      prize: "1",
      context: "Technology Commercialization Contest",
      context1: "Ministry of Science, ICT and Future Planning in Korea",
    },
    {
      year: "2016",
      prize: "3",
      context: "Hackathon Contest",
      context1: "POSTECH Entrepreneurship Center",
    },
    {
      year: "2016",
      prize: "1",
      context: "Startup Business Idea Contest",
      context1: "Kyungbook Software Convergence Center",
    },
    {
      year: "2015",
      prize: "1",
      context: "Hackathon Contest",
      context1: "POSTECH",
    },
    {
      year: "2014",
      prize: "1",
      context: "Best Paper Award",
      context1: "ACM Conference in HCI Korea",
    },
    {
      year: "2013",
      prize: "2",
      context: "Business Plan Contest with Knowledge Service",
      context1: "National IT Industry Promotion Agency in Korea",
    },
    {
      year: "2012",
      prize: "1",
      context: "Idea Contest Exhibit of Science and Technology Policy",
      context1: "The Korean Federation of Science and Technology Societies",
    },
  ];

  return (
    <div className={styles.pWrapper}>
      <Header />
      <div className={styles.pTitle}>PROFESSOR</div>
      <div className={styles.pListContent}>
        <img
          src="/images/kdpark.png"
          alt="박규동 교수님"
          className={styles.image}
        />
        <div className={styles.left_view}>
          <p>
            Dr. Kyudong Park is an Assistant Professor in the{" "}
            <a
              href="https://ic.kw.ac.kr:501/main/main.php"
              target="_blank"
              rel="noreferrer"
            >
              School of Information Convergence
            </a>{" "}
            at{" "}
            <a href="https://www.kw.ac.kr/ko/" target="_blank" rel="noreferrer">
              KwangWoon
            </a>{" "}
            University , and he directs Human-centered Computing Lab. He
            received his Ph.D. in Interdisciplinary Engineering (Computer
            Science & Industrial and Management Engineering) at{" "}
            <a href="https://postech.ac.kr/" target="_blank" rel="noreferrer">
              POSTECH
            </a>{" "}
            in South Korea. Before joining KwangWoon University, he was in
            charge of data-driven UX design as a Senior Researcher at{" "}
            <a
              href="https://www.samsungsds.com/kr/index.html"
              target="_blank"
              rel="noreferrer"
            >
              SAMSUNG SDS
            </a>
            . His research interests include Intelligent Interaction, Human-AI
            interaction, Human-centered computing, and VR/AR.
          </p>
          <p>
            <b>Contact</b>: kdpark@kw.ac.kr
          </p>
          <p>
            <b>TEL</b>: +82-2-940-5638
          </p>
          <p>
            <b>Office</b>: Room 804, Bldg. Saebit, KwangWoon University, Seoul,
            South Korea
          </p>
        </div>
      </div>
      <div className={styles.context_one_view}>
        <div className={styles.yeartext}>Research Interests</div>
        <ProfessorListMap list={Research_Interests} category={0} />

        <div className={styles.yeartext}>Work Experience</div>
        <ProfessorListMap list={Work_Experience} category={1} />

        <div className={styles.yeartext}>Education</div>
        <ProfessorListMap list={Education} category={1} />

        <div className={styles.yeartext}>Professional Activities</div>
        <ProfessorListMap list={Professional_Activities} category={4} />

        <div className={styles.yeartext}>Invited Talks</div>
        <ProfessorListMap list={Invited_Talks} category={2} />

        <div className={styles.yeartext}>Awards</div>
        <ProfessorListMap list={Awards} category={3} />
      </div>
    </div>
  );
}
