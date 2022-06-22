import React from "react";
import Header from "../components/Header";
import styles from "../styles/Introduction.module.css";

function ProjectMaker({ index, from }) {
  return (<>
      <li className={styles.indexs}>
          {index}  ({from})
      </li>
        </>
  );
}

const projects_first = [
  {
    index:
      "2022.04 - 2023.03 인공지능 기반 파킨슨병 환자의 자가 훈련과 모니터링 솔루션 개발 및 사업화 Development and Commercialization of AI-based Self-training and Monitoring Solutions for Patients with Parkinsonism",
    from: "IITP, 정보통신기획평가원",
  },
  {
    index: "2022.02 - 2022.12 웹 쇼핑몰의 고객 경험 분석 및 그로스해킹 컨설팅",
    from: "Designovel, 디자이노블",
  },
  {
    index: "2022.02 - 2022.06 브랜드 악용 탐지 솔루션의 대시보드 설계 및 개발",
    from: "S2W, 에스투더블유",
  },
  {
    index:
      "2021.04 - 2023.12 청각보조기기 현장 실증 및 사용성 평가 Development of hearing aids that conveniently receive sound and subtitles",
    from: "Korea Health Industry Development Institute, 한국보건산업진흥원",
  },
  {
    index:
      "2021.03 - 2024.02 신뢰 조절을 활용한 자율주행시스템의 운전자 경험 설계 및 모델링 Experience Design and Modeling of Autonomous Driving System using Trust Calibration",
    from: "National Research Foundation of Korea, 한국연구재단",
  },
  {
    index:
      "2021.09 - 2023.12 의료적 관리가 필요한 장애인을 위한 재활운동기기 개발 및 임상 중개 연구-상지운동기기",
    from: "국립재활원",
  },
];

function ProjectMaker2({ index, from }) {
  return (
      <li className={styles.indexs}>
        {index} ({from})
      </li>
  );
}

const projects_sec = [
  {
    index:
      "2021.09 - 2022.02 지능형 로봇을 위한 기초수학 분야의 학습 패턴 분석 및 교육 개선안 도출 : 데이터 애널리틱스 활용 사례 연구",
    from: "한양대학교 산학협력단",
  },
  {
    index:
      "2021.01 ~ 2021.12 발달장애인의 의사소통 효율성 증대를 위한 AAC 검색 기능 및 표현 예측 알고리즘 개발",
    from: "SOVORO, 소리를보는통로",
  },
  {
    index:
      "2020.07 - 2020.09 파킨슨병환자를 위한 운동 처방 및 관리 어플리케이션 개발 Development of Exercise Prescription and Management Application for Parkinson's disease",
    from: "Seoul National University Hospital, 서울대학교병원",
  },
  {
    index:
      "2020.02 - 2020.08 데이터 기반 UX/CX 분석 방법론 개발 Data-driven UX/CX Analysis methodology",
    from: "Samsung SDS",
  },
  {
    index:
      "2019.07 - 2019.11 컨택센터의 CX 연구 방법론 설계 CX Research methodology in Contact Center",
    from: "Samsung Electronics America & Samsung SDS America",
  },
  {
    index:
      "2018.08 - 2018.12  Blockchain Platform with Business Models towards Cross-domain Interoperability ",
    from: "Ministry of Science and ICT, 미래창조과학부",
  },
  {
    index:
      "2017.07 - 2017.11  프로세스마이닝 기반 시스템 로그와 UX 분석 모델 개발 Development of System Log and UX analysis Model based on Process Mining",
    from: "Samsung Heavy Industries, 삼성중공업",
  },
  {
    index:
      "2016.06 - 2017.07  Development of supportive tools for enhancing pedestrian experience of the mobility handicapped based on IoT",
    from: "National Research Foundation of Korea, 한국연구재단",
  },
  {
    index:
      "2016.05 - 2017.07  Development of a statistical analysis program for LKAS (Lane Keeping Assist System) performance evaluation",
    from: "Hyundai Motor Company, 현대자동차",
  },
  {
    index:
      "2016.06 - 2016.10  A Study on the Multi-Device Usage of Millennials",
    from: "Samsung Electronics, 삼성전자",
  },
  {
    index:
      "2016.03 - 2016.08  User experience evaluation system for consumer electronic products to enhance competitiveness of small and medium enterprises",
    from: "Ministry of Trade, Industry and Energy, 산업통상자원부",
  },
  {
    index:
      "2015.07 - 2016.02  Research on the Development of Embodied Participatory Simulation and its Effects from Embodied Cognition Perspectives",
    from: "National Research Foundation of Korea, 한국연구재단",
  },
  {
    index:
      "2014.07 - 2016.02  POA: Designing a Gamification-Based Social Learning Application",
    from: "미래IT융합연구소",
  },
  {
    index:
      "2014.03 - 2014.10  Web-page Clustering Method focusing on Similarity Measures ",
    from: "National Security Research Institute, 국가보안기술연구소",
  },
];

export default function Introduction() {
  return (
    <>
      <Header></Header>

      <div className={styles.center}>
        <div className={styles.topWord}>WHERE TECHNOLOGY MEETS HUMANITY</div>

        <div>
          <img className={styles.imgfirst} src="/logos/process2.png" />
        </div>

        <p className={styles.conceptfirst}>
          
          인공지능이 갖는 <b>도구로서의 잠재력</b>을 극대화하여{" "}
          <b>인간/사용자의 관점</b>에서 컴퓨팅시스템을 연구/개발합니다.
        </p>
        <p className={styles.titlefirst}>RESEARCH TOPICS </p>

        <div className={styles.container}>
          <div></div>

          <div className={styles.widthsize}>
            <img className={styles.imagethree} src="/logos/first.png" /> <br />
            <div className={styles.indexs}>
              <div className={styles.titlesecond}> 01. Human-centered AI </div>{" "}
              <br />
              <p className={styles.listfirst}>
                {" "}
                AI 기반 재활 보조 애플리케이션 개발 <br />
                AI 기반 멘탈 헬스케어 시스템 설계
                <br />
                AI 기반 고객 경험 (CX) 관리{" "}
              </p>
            </div>
          </div>

          <div>
            <img className={styles.imagethree2} src="/logos/second.png" />{" "}
            <br />
            <div className={styles.indexs}>
              <div className={styles.titlesecond2}>
                {" "}
                02. Online User Behavior Analysis{" "}
              </div>{" "}
              <br />
              <p className={styles.listfirst2}>
                {" "}
                디지털 마케팅의 효과 측정 및 분석 (Growth Hacking) <br />
                온라인 학습 패턴 분석 (Learning analytics) <br />
                온라인의 사용자 리뷰 및 VoC 분석
              </p>
            </div>
          </div>

          <div>
            <img className={styles.imagethree3} src="/logos/last.jpg" /> <br />
            <div className={styles.indexs}>
              <div className={styles.titlesecond3}>
                {" "}
                03. Interaction Design{" "}
              </div>{" "}
              <br />
              <p className={styles.listfirst3}>
                {" "}
                자율주행 차량의 사용자 인터페이스 설계 <br />
                가상현실에서의 리빙랩 및 사용성 평가 <br />
                인터랙티브 대시보드 설계 및 시각화
              </p>
            </div>
          </div>

          <div></div>
        </div>

        <p className={styles.titlefirst}>PROJECTS </p>

        <div className={styles.titlefirst2}>

          <p className={styles.subtitle}>
            <b className={styles.indexheader}>On-going Projects</b>
          </p>

          <ul className={styles.lastlists}>
            {projects_first.map((project) => (
              <ProjectMaker index={project.index} from={project.from} />
            ))}
          </ul>

          <p className={styles.subtitle}>
            
            <b className={styles.indexheader}>Finished Projects </b>
          </p>
          
          <ul className={styles.lastlists}>
            {projects_sec.map((project) => (
              <ProjectMaker2 index={project.index} from={project.from} />
            ))}
          </ul>

        </div>
      </div>
    </>
  );
}
