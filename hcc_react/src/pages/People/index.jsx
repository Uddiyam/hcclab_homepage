import React from "react";
import Activities from "../../components/Activities";
import Header from "../../components/Header";
import styles from "../../styles/People.module.css";
import PeopleIntroGrid from "../../components/PeopleIntroGrid";
import { Link } from "react-router-dom";

export default function People() {
  const peopleInfo = [
    {
      name: "채수지 (4학년)",
      info: "#front-end #react \n#android",
      image: "csj.png",
    },
    {
      name: "김주현 (4학년)",
      info: "#digital_marketing \n#A/B test",
      image: "kjh.png",
    },
    {
      name: "이영현 (3학년)",
      info: "#UX #HCI \n#PM",
      image: "lyh2.png",
    },
    {
      name: "곽소정 (4학년)",
      info: "#Usability_test \n#UXR #HCI",
      image: "ksj2.png",
    },
    {
      name: "신수빈 (4학년)",
      info: "#UX_design\n #HCI",
      image: "ssb.png",
    },
    {
      name: "김종민 (4학년)",
      info: "#visual_analytics \n#front-end",
      image: "kjm.png",
    },
    {
      name: "이규민 (4학년)",
      info: "#dev #back-end \n #spring #android",
      image: "lkm.png",
    },
    {
      name: "변유진 (3학년)",
      info: "#dev #front-end \n #react",
      image: "변유진.png",
    },
    {
      name: "이현빈 (4학년)",
      info: "#Web #front-end \n  #react",
      image: "이현빈.png",
    },
    {
      name: "이지은(3학년)",
      info: "#dev #back-end \n#spring",
      image: "lje.png",
    },
    {
      name: "홍성혁(4학년)",
      info: "#dev #front-end \n #react",
      image: "홍성혁.png",
    },
  ];

  const activities = [
    {
      type: {
        type_name: "수상",
      },
      lists: [
        {
          info1: "2021.11.12.  신수빈. 옥외광고 이미지제고 동영상 공모전",
          bold1: "옥외광고 이미지제고 동영상 공모전",
          info1_1: "최우수상 수상",
          info2:
            "2021.11.09.  채수지, 김주현, 이규민.  2021 관광데이터 활용 공모전",
          bold2: " 2021 관광데이터 활용 공모전",
          info2_1: "우수상 수상",
        },
      ],
    },
    {
      type: {
        type_name: "특허",
      },
      lists: [
        {
          info1: "2021.11.26.  김주현, 채수지, 정범영, 박규동.",
          bold1: "고객 맞춤형 사용자 인터페이스를 제공하는 무인단말기",
          info1_1: "(출원번호 10-2021-0165563)",
          info2: "2021.11.26.  정범영, 박규동.",
          bold2: " 맥락 정보 기반 보완 대체 의사소통 방법 및 장치",
          info2_1: " (출원번호 10-2021-0165562)",
        },
      ],
    },
  ];

  return (
    <>
      <Header url={2} />
      <div className={styles.Container}>
        <div className={styles.MemberTitle}>MEMBERS</div>
      </div>
      <div className={styles.Background}>
        <img
          className={styles.PeopleImg}
          src="박규동(square).png"
          alt="교수님"
        />
        <div className={styles.Info}>
          <h2>박규동 (Kyudong Park, PhD) | 공학박사 조교수</h2>
          <ul>
            <li>
              소프트웨어융합대학 정보융합학부 / 일반대학원 인공지능응용학과
            </li>
            <li>Email : kdpark@kw.ac.kr / Tel : 02-940-5638</li>
            <li>Office : 새빛관 804호 / 일정 : 보기</li>
            <li>
              <Link to={"/Professor"}>자세히</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Text}>
        <h3>GRADUATE STUDENTS</h3>
      </div>
      <div className={styles.Background}>
        <img className={styles.PeopleImg} src="khs.png" alt="석사님" />
        <div className={styles.Info}>
          <h3 className={styles.Name}>김현수</h3>
          <p>
            인공지능응용학과
            <br />
            #HCI/UX #eHealth
            <br />
            #Universal_design
          </p>
        </div>
      </div>
      <div className={styles.Text}>
        <h3>UNDERGRADUATE STUDENTS</h3>
      </div>
      <div className={styles.Background}>
        <PeopleIntroGrid peopleInfo={peopleInfo} />
      </div>
      <div className={styles.Text}>
        <h3>STUDENTS' ACTIVITIES</h3>
      </div>
      <div>
        <Activities activities={activities} />
      </div>
      <div className={styles.Background} style={{ marginTop: "-30px" }}>
        <ul className={styles.TypeName}>
          <li>
            <b>학회 발표</b>
          </li>
        </ul>
        <ul className={styles.Lists}>
          <li>
            2022.04.28. 김현수, 곽소정, 정범영, 박규동.{" "}
            <b>
              벽걸이형 청각보조기기의 사용자 평가: 사용자 만족도 및 음질을
              중심으로.
            </b>{" "}
            대한인간공학회 춘계학술대회
          </li>
          <li>
            2022.02.10. 이재은, 이지은, 임예희, 박규동, 조민수.{" "}
            <b>
              자연어처리 기술을 활용한 유튜브 악성 댓글 자동 블라인드 시스템.
            </b>{" "}
            HCI Korea 2022.
          </li>
          <li>
            2022.02.10. 권준혁, 소현수, 장석원, 손재성, 박규동.{" "}
            <b>음악 커버 영상 제작을 위한 애플리케이션 설계 및 개발.</b> HCI
            Korea 2022.
          </li>
          <li>
            2021.11.29. 이영현, 김현수, 박규동.{" "}
            <b>
              게임화를 활용한 재활 운동의 연구 동향: 사용자의 동기부여를
              중심으로.
            </b>{" "}
            대한인간공학회 추계학술대회
          </li>
          <li>
            2021.10.20. 정범영, 박규동.{" "}
            <b>
              Heuristic Evaluation for Augmentative and Alternative
              Communication Application: A Case Study.
            </b>{" "}
            International Conference on ICT Convergence
          </li>
          <li>
            2021.10.20. 채수지, 박규동.{" "}
            <b>
              Design and Evaluation of Exercise Management Application for
              Patients with Parkinsonism.
            </b>{" "}
            International Conference on ICT Convergence
          </li>
          <li>
            2021.10.16. 정범영, 박규동.{" "}
            <b>문자 통역 기술을 적용한 AAC 어플리케이션의 평가.</b>{" "}
            한국보완대체의사소통학회 추계학술대회
          </li>
          <li>
            2021.06.17. 채수지, 박규동.{" "}
            <b>파킨슨병 환자의 재활을 위한 모바일 어플리케이션 설계.</b>{" "}
            대한인간공학회 춘계학술대회
          </li>
          <li>
            2021.06.17. 정범영, 박규동.{" "}
            <b>보완대체의사소통 모바일 어플리케이션에 대한 조사.</b>{" "}
            대한인간공학회 춘계학술대회
          </li>
          <li>
            2021.06.17. 조형준, 김예원, 유찬영, 최인아, 한준아, 박규동.{" "}
            <b>디자인 사고를 활용한 시각장애인용 프로그래밍 도구 설계.</b>{" "}
            대한인간공학회 춘계학술대회
          </li>
        </ul>
      </div>
      <div className={styles.Text}>
        <h3>ALUMNI</h3>
      </div>
      <div className={styles.Background}>
        <ul className={styles.Lists}>
          <li>(학부연구생) 정범영, 2021.01 ~ 2021.12</li>
          <li>(학부연구생) 김채현, 2021.07 ~ 2022.02</li>
        </ul>
      </div>
    </>
  );
}
