import React from "react";
import styles from "../styles/Lectures.module.css";
import Header from "../components/Header";
import LectureIntroGrid from "../components/LectureIntroGrid";

export default function Lectures() {
  const lectureInfo = [
    {
      type: {
        eng: "GRADUATE COURSEWORK",
        kor: "대학원",
      },
      lists: [
        {
          titleEng: "USER EXPERIENCE EXPERIMENT AND STATISTICS",
          titleKor: "UX실험및통계",
          yearSemester: ["대학원 2021-2"],
          summary:
            "인간을 대상으로 실험을 계획하고, 이를 통해 수집한 데이터를 분석하는 법을 다룬다. 통계 결과를 해석하고 논문으로 작성하기 위한 방법을 배운다.",
        },
        {
          titleEng: "NEW MEDIA DESIGN FOR LEARNING AND PROJECT MANAGEMENT",
          titleKor: "뉴미디어기반 학습설계 및 프로젝트 관리",
          yearSemester: ["교육대학원 2021-2 (팀티칭)"],
          summary:
            "본 교과목을 통해 다양한 뉴미디어를 이해하고 교육현장에서의 활용을 위해 설계-개발-실행-평가관리의 교수설계 과정을 실습하여 뉴미디어 기술, 운영체제, 소프트웨어, 하드웨어 역할에 대한 기초지식을 쌓을 수 있다. 블럭 기반의 VR/AR 콘텐츠를 만드는 방법을 실습하며 이를 토대로 수업 설계에 활용한다.",
        },
        {
          titleEng: "RESEARCH METHODS IN HCI",
          titleKor: "HCI연구방법론",
          yearSemester: ["대학원 2022-1"],
          summary:
            "인간-컴퓨터 상호작용 분야에서 연구를 수행하기 위한 여러가지 방법론(설문조사, 인터뷰, 에스노그라피, 사용성평가 등)을 배우고 실습한다. 국제 우수 학술대회 (CHI, UIST, IUI) 에 발표된 논문과 최근 저널에 게재된 연구들을 함께 살펴보며 트렌드를 익히고 인터페이스 개발을 실습해본다.",
        },
        {
          titleEng: "UX ANALYTICS",
          titleKor: "UX 애널리틱스",
          yearSemester: ["대학원 2022-2 (예정)"],
          summary:
            "로그 수집 분석을 통해 사용자의 행동을 파악하고 인사이트를 얻는 방법에 대해 학습한다. 통계 기반의 A/B 테스트부터 머신러닝, 메타휴리스틱 기법들을 활용하여 서비스를 최적화하는 방법을 배운다. 검색 엔진 최적화(SEO), 그로스해킹 개념을 이해함으로써 성장하는 서비스를 만들기 위한 융합적 시야를 갖는다.",
        },
      ],
    },
    {
      type: {
        eng: "UNDERGRADUATE COURSEWORK",
        kor: "학부",
      },
      lists: [
        {
          titleEng: "EXPERIMENTAL DESIGN AND ANALYSIS",
          titleKor: "실험설계및분석",
          yearSemester: ["2021-1", "2022-1"],
          summary:
            "인간을 대상으로 실험을 계획하고, 이를 통해 데이터를 수집하고, 수집한 데이터를 분석하는 법을 다룬다. 최소의 실험횟수에서 최대의 정보를 얻기 위한 통계적 방법과 학문적 이론을 배우게 된다.",
        },
        {
          titleEng: "WEB SERVICE DESIGN AND IMPLEMENTATION",
          titleKor: "웹서비스설계및구현",
          yearSemester: ["2021-2", "2022-2"],
          summary:
            "웹서비스를 개발하기 위해 필요한 이론/개념 및 프레임워크에 대해 학습한다. CRUD 및 Restful API의 개념을 익히고, python 과 javascript 기반의 프레임워크로 실습이 진행될 예정이다.",
        },
        {
          titleEng: "INFORMATION DESIGN AND PROGRAMMING",
          titleKor: "정보디자인 프로그래밍",
          yearSemester: ["2020-2", "2021-1", "2022-1"],
          summary:
            "정보디자인에 대한 이론을 기반으로 웹 환경에서 정보를 효과적으로 설계하고 시각화하는 방법을 학습한다. (JavaScript, d3.js 실습 및 Front-end 소개)",
        },
        {
          titleEng: "APPLICATIONS OF STATISTICS",
          titleKor: "통계학응용",
          yearSemester: ["2021-2"],
          summary:
            "SW를 전공하고 있는 학생을 위한 기본적인 확률 및 통계에 대한 이론을 다룬다. 확률변수, 분포, 추정, 검정에 대한 개념을 배우게 된다.",
        },
        {
          titleEng: "INTRODUCTION OF CREATIVE DESIGN",
          titleKor: "창의설계입문",
          yearSemester: ["2020-2", "2021-1"],
          summary:
            "복잡한 문제를 창의적으로 해결하기 위해 각광받고 있는 디자인 사고(Design Thinking)의 개념과 프로세스에 대해 학습한다. 실제 문제에 적용하여 해결하는 과정을 통해 디자인사고 능력을 내재화한다.",
        },
        {
          titleEng: "VISUAL COMPUTING",
          titleKor: "비주얼컴퓨팅",
          yearSemester: ["2020-2"],
          summary:
            "비주얼테크놀로지의 기반이 되는 영상처리, 컴퓨터비전, 컴퓨터그래픽스의 전반적인 기초 이론과 실습을 다룬다. (openCV & openGL 실습)",
        },
      ],
    },
  ];

  return (
    <div className={styles.lecturesWrapper}>
      <Header url={3} />
      <div className={styles.lecturesTitle}>LECTURES</div>
      <div className={styles.lecturesListWrapper}>
        <div className={styles.lecturesListTitle}>LIST</div>
        <div className={styles.lecturesListContent}>
          <ul>
            <li>
              <span>2022년 2학기 : 웹서비스설계및구현, UX 애널리틱스</span>
            </li>
            <li>
              <span>
                2022년 1학기 : 정보디자인프로그래밍, 실험설계및분석,
                HCI연구방법론
              </span>
            </li>
            <li>
              <span>
                2021년 2학기 : 통계학응용, 웹프로그래밍, UX실험및통계,
                뉴미디어기반 학습설계 및 프로젝트 관리 &#40;강의평가점수 : 4.69
                / 5.00&#41;
              </span>
            </li>
            <li>
              <span>
                2021년 1학기 : 창의설계입문, 정보디자인, 실험설계및분석
                &#40;강의평가점수 : 4.64 / 5.00&#41;
              </span>
            </li>
            <li>
              <span>
                2020년 2학기 : 디자인사고, 정보디자인, 비주얼컴퓨팅
                &#40;강의평가점수 : 4.59 / 5.00&#41;
              </span>
            </li>
          </ul>
        </div>
      </div>
      <LectureIntroGrid lectureInfo={lectureInfo} />
    </div>
  );
}
