import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import NewsListMap from "../components/NewsListMap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Home() {
  const [show, view_show] = useState(false);

  var news_list_2022 = [
    {
      year: "2022.04.28",
      group: "Conference",
      context:
        "김현수, 곽소정 학생이 대한인간공학회 춘계학술대회에서 연구 결과를 발표하였습니다.",
    },
    {
      year: "2022.04.01",
      group: "People",
      context:
        "변유진, 이현빈, 이지은, 홍성혁 학생이 학부연구생으로 활동을 시작합니다. 환영합니다!",
    },
    {
      year: "2022.04.01",
      group: "Project",
      context: "정보통신기획평가원 주관 ICT R&D 프로젝트에 선정되었습니다. ",
    },
    {
      year: "2022.02.10",
      group: "Conference",
      context: "HCI Korea 2022 학술대회에 프로그램 위원장으로 참여하였습니다. ",
    },
    {
      year: "2022.01.28",
      group: "Seminar",
      context:
        "이화여대 사범대학에서 2주간 'AI교육을 위한 파이썬' 을 강연하였습니다. ",
    },
    {
      year: "2022.01.13",
      group: "Seminar",
      context: "겨울방학 집중세미나 (주제 : UX Analytics)",
    },
  ];

  var news_list_2021 = [
    {
      year: "2021.12.20",
      group: "Conference",
      context:
        "한국정보과학회 한국소프트웨어종합학술대회(KSC 2021)에 참가하였습니다.",
    },
    {
      year: "2021.11.30",
      group: "Conference",
      context: "대한인간공학회 추계학술대회에 참가하였습니다.",
    },
    {
      year: "2021.10.30",
      group: "Seminar",
      context:
        "10월의하늘에 참여하여 초/중등 학생을 대상으로 HCI와 실감형 기술에 대해 강연하였습니다. ",
    },
    {
      year: "2021.10.14",
      group: "Seminar",
      context:
        "이화여대 교육공학과 박사과정콜로키움에서 '추천시스템과 알고리즘의 편향성'을 주제로 강연하였습니다.",
    },
    {
      year: "2021.10.07",
      group: "Paper",
      context:
        "'재활 환자의 동기부여를 위한 ICT 기술의 가능성과 미래' 가 IE매거진에 특집 원고로 실렸습니다.  ",
    },
    {
      year: "2021.09.27",
      group: "Seminar",
      context:
        "노원구청 특별강좌에서 '비대면시대의 실감형 콘텐츠 기술'을 주제로 강연하였습니다. ",
    },

    {
      year: "2021.09.09",
      group: "Paper",
      context:
        "Our paper was accepted at International Journal of Industrial Ergonomics (SSCI)",
    },
    {
      year: "2021.07.26",
      group: "Seminar",
      context:
        "삼성SDS 디자인씽킹 연구회에서 'Growth Hacking' 을 주제로 발표하였습니다.",
    },

    {
      year: "2021.07.07",
      group: "Seminar",
      context: "Summer HCI Intensive seminar (집중세미나) was held.",
    },
    {
      year: "2021.07.03",
      group: "Paper",
      context: "Our paper was accepted at JMIR mHealth and uHealth (SCIE)",
    },

    {
      year: "2021.06.18",
      group: "Conference",
      context:
        " 대한인간공학회 2021 춘계학술대회에서 연구 내용을 발표하였습니다. ",
    },
    {
      year: "2021.06.17",
      group: "Seminar",
      context: "Seoul VR AR Expo 2021 에 참가하였습니다. ",
    },

    {
      year: "2021.05.28",
      group: "Seminar",
      context:
        "'데이터주도 산업의 미래 전망과 우려' 세미나(한국미디어경영학회 주관)에 참가하였습니다. ",
    },
    {
      year: "2021.03.29",
      group: "Paper",
      context: "Our paper was accepted at The Asia-Pacific Education ",
    },
    {
      year: "2021.03.17",
      group: "Project",
      context:
        "Korea Health Industry Development Institute (한국보건산업진흥원) Project accepted",
    },
    {
      year: "2021.02.19",
      group: "Project",
      context:
        "National Research Foundation of Korea (한국연구재단) Project accepted ",
    },
    {
      year: "2021.02.03",
      group: "Paper",
      context:
        "Our paper was accepted at International Journal of Human-Computer Interaction (SSCI) ",
    },

    {
      year: "2021.01.27",
      group: "Conference",
      context: "HCI Korea 2021 학술대회에서 학술위원으로 활동하였습니다. ",
    },
    {
      year: "2021.01.06",
      group: "Seminar",
      context: "Winter Intensive seminar was held.",
    },
    {
      year: "2020.10.30",
      group: "Conference",
      context:
        " 대한인간공학회 추계학술대회의 신진연구자콜로키움에서 연구 내용을 발표하였습니다.",
    },
  ];

  const icon_click_check1 = (e) => {
    //show true로 바꿔주기
    e.preventDefault();
    view_show(true);
  };

  const icon_click_check2 = (e) => {
    e.preventDefault();
    view_show(false);
  };

  return (
    <div className ={styles.homeview}>
      <Header />
      <div className={styles.TitleView}>
        <div className={styles.main_text}>
          HUMAN-CENTERED
          <br />
          COMPUTING LAB
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.Content}>
        <div className={styles.intro_view}>
          <div className={styles.SubText}>INTRO</div>
          <div className={styles.s_text}>
            We conduct Human-Computer Interaction (HCI) research by designing an
            interactive computing system from human perspectives. Our main
            research interests are 1) UX/CX Research to identify customer pain
            points, 2) Human-centered AI to derive insights from data, and 3)
            Rapid development of MVP (Minimum viable product) to verify
            solutions. For more detailed research areas of interest, please
            visit Introduction.
          </div>

          <div className={styles.s_text}>
            Currently looking for self-motivated, passionate students. If you
            are interested in research assistants studying HCI, UX, or AI
            applications, please feel free to contact me at email.
          </div>

          <div className={styles.s_text}>
            HCC 연구실은 인간, 사용자의 관점에서 인터랙티브 시스템을 설계하고
            개발하는 HCI 연구를 수행합니다. 주요 연구 관심사는 다음과 같습니다.
            <br />
            1) 고객 경험 개선을 위한 UX/CX 리서치, 2) 데이터로부터 통찰을 얻는
            인간 중심 인공지능, 3) MVP 검증을 위한 소프트웨어 서비스 개발
            (모바일과웹 Full stack 기술). 더 자세한 소개를 원하면 Introduction
            페이지를 참고 바랍니다.
          </div>

          <div className={styles.s_text}>
            HCI, UX, 인공지능응용 관련 연구생(학부/학석연계/석사)에 관심이
            있다면 모집 안내문을 참고하세요
          </div>
        </div>

        <div className={styles.news_view}>
          <div className={styles.SubText}>NEWS</div>
          <div className={styles.row_view}>
            <div className={styles.yeartext}>2022</div>
          </div>
          <NewsListMap list={news_list_2022} />
          <div className={styles.row_view} style={{ marginTop: "2rem" }}>
            <div className={styles.yeartext}> ~ 2021</div>
            <div className={styles.icon_view}>
              {!show && (
                <FaAngleDown
                  style={{ width: 30, height: 30 }}
                  onClick={icon_click_check1}
                />
              )}
              {show && (
                <FaAngleUp
                  style={{ width: 30, height: 30 }}
                  onClick={icon_click_check2}
                />
              )}
            </div>
          </div>
          <div className={styles.line_s}></div>
          {show && (
            <div style={{ marginBottom: "2rem" }}>
              <NewsListMap list={news_list_2021} />
            </div>
          )}
        </div>

        <div className={styles.collaborators_view}>
          <div className={styles.SubText}>COLLABORATORS</div>
          <img
            className={styles.headerLogo}
            src="/logos/logos.png"
            alt="광운대학교 로고"
          />
        </div>
      </div>
    </div>
  );
}
