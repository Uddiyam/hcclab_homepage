import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import NewsListMap from "../components/NewsListMap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Home() {
  const [show, view_show] = useState(false);

  var news_list_2022 = [
    {
      year: "2022.05.20",
      group: "Conference",
      context:
        "학부연구생 채수지, 이규민 학생이 한국정보처리학회 학부생논문경진대회에서 장려상을 수상하였습니다. 축하합니다.",
    },
    {
      year: "2022.05.20",
      group: "Paper",
      context:
        "Our paper was accepted at <a href='http://hcisj.com/' target='_blank'>Human-centric Computing and Information Sciences</a> (SCIE Q1 IF=5.9)",
    },
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
        "<a href='https://www.google.com/url?q=https%3A%2F%2Fwww.octobersky.org%2F&sa=D&sntz=1&usg=AOvVaw0GH0stsJBjXHG3hJmIvk4P' target='_blank'>10월의하늘</a>에 참여하여 초/중등 학생을 대상으로 <b>HCI와 실감형 기술</b>에 대해 강연하였습니다. ",
    },
    {
      year: "2021.10.14",
      group: "Seminar",
      context:
        "이화여대 교육공학과 박사과정콜로키움에서 '<b>추천시스템과 알고리즘의 편향성</b>'을 주제로 강연하였습니다.",
    },
    {
      year: "2021.10.07",
      group: "Paper",
      context:
        "'<b>재활 환자의 동기부여를 위한 ICT 기술의 가능성과 미래</b>' 가 <a href='https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE10612960&mark=0&useDate=&ipRange=N&accessgl=Y&language=ko_KR&hasTopBanner=true' target='_blank'>IE매거진</a>에 특집 원고로 실렸습니다.  ",
    },
    {
      year: "2021.09.27",
      group: "Seminar",
      context:
        "노원구청 특별강좌에서 '<b>비대면시대의 실감형 콘텐츠 기술</b>'을 주제로 강연하였습니다. ",
    },

    {
      year: "2021.09.09",
      group: "Paper",
      context:
        "Our paper was accepted at <a href='http://hcisj.com/' target='_blank'>International Journal of Industrial Ergonomics</a> (SSCI)",
    },
    {
      year: "2021.07.26",
      group: "Seminar",
      context:
        "삼성SDS 디자인씽킹 연구회에서 '<b>Growth Hacking</b>' 을 주제로 발표하였습니다.",
    },

    {
      year: "2021.07.07",
      group: "Seminar",
      context:
        "Summer  <a href='./' >HCI Intensive seminar (집중세미나)</a> was held.",
    },
    {
      year: "2021.07.03",
      group: "Paper",
      context:
        "Our paper was accepted at  <a href='https://mhealth.jmir.org/' target='_blank'>JMIR mHealth and uHealth</a> (SCIE)",
    },

    {
      year: "2021.06.18",
      group: "Conference",
      context:
        "  <a href='https://www.esk.or.kr/' target='_blank'>대한인간공학회 2021 춘계학술대회</a>에서 연구 내용을 발표하였습니다. ",
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
      context:
        "Our paper was accepted at  <a href='https://www.springer.com/journal/40299?gclid=Cj0KCQjw0oCDBhCPARIsAII3C_HqwQa45XHYI3cMD_PDeZ7qnJ4jOM5gGqb9_q3lTO92-BfKgS_8cS4aAkAzEALw_wcB' target='_blank'>The Asia-Pacific Education Researcher</a> (SSCI) ",
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
        "Our paper was accepted at <a href='https://www.tandfonline.com/toc/hihc20/current' target='_blank'>International Journal of Human-Computer Interaction</a> (SSCI) ",
    },

    {
      year: "2021.01.27",
      group: "Conference",
      context:
        "<a href='https://conference.hcikorea.org/hcik2021/main/main.asp' target='_blank'>HCI Korea 2021 학술대회</a>에서 학술위원으로 활동하였습니다. ",
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
        "<a href='https://www.esk.or.kr/' target='_blank'>대한인간공학회 추계학술대회</a>의 신진연구자콜로키움에서 연구 내용을 발표하였습니다.",
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
    <div className={styles.homeview}>
      <Header url={0} />
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
          <p className={styles.s_text}>
            We conduct{" "}
            <span className={styles.point_text}>
              Human-Computer Interaction
            </span>{" "}
            (HCI) research by designing an interactive computing system from
            human perspectives. Our main research interests are{" "}
            <span className={styles.point_text}>1) UX/CX Research</span> to
            identify customer pain points,{" "}
            <span className={styles.point_text}>2) Human-centered AI</span> to
            derive insights from data, and{" "}
            <span className={styles.point_text}>
              3) Rapid development of MVP
            </span>{" "}
            (Minimum viable product) to verify solutions. For more detailed
            research areas of interest, please visit{" "}
            <a href="./" className={styles.hyper_text}>
              Introduction.
            </a>
          </p>

          <div className={styles.s_text}>
            Currently looking for self-motivated, passionate students. If you
            are interested in research assistants studying HCI, UX, or AI
            applications, please feel free to contact me at email.
          </div>

          <p className={styles.s_text}>
            <span className={styles.point_text}>
              인간중심컴퓨팅연구실 (HCC Lab)
            </span>
            은 인간, 사용자의 관점에서 인터랙티브 시스템을 설계하고 개발하는 HCI
            연구를 수행합니다. 주요 연구 관심사는 다음과 같습니다.
            <br /> 1) 고객 경험 개선을 위한 UX/CX 리서치, 2) 데이터로부터 통찰을
            얻는 인간 중심 인공지능, 3) 프로토타입 개발 및 검증 (모바일과 웹
            Full stack)
          </p>

          <p className={styles.s_text}>
            더 자세한 소개를 원하면{" "}
            <a href="./" className={styles.hyper_text}>
              Introduction
            </a>{" "}
            페이지를 참고 바랍니다. HCI, UX, 인공지능응용 관련{" "}
            <span className={styles.point_text}>
              연구생(학부/학석연계/석사)
            </span>
            에 관심이 있다면{" "}
            <a href="./" className={styles.hyper_text}>
              모집 안내문
            </a>
            을 참고하세요
          </p>
        </div>

        <div className={styles.news_view}>
          <div className={styles.SubText}>NEWS</div>
          <div className={styles.yeartext}>2022</div>

          <div className={styles.list_view}>
            <NewsListMap list={news_list_2022} />
          </div>

          <div className={styles.row_view}>
            <div className={styles.yeartext1}> ~ 2021</div>
            <div className={styles.icon_view}>
              {!show && (
                <>
                  <FaAngleDown
                    style={{ width: 30, height: 30 }}
                    onClick={icon_click_check1}
                  />
                  <span className={styles.tooltip}>펼치기</span>
                </>
              )}
              {show && (
                <>
                  <FaAngleUp
                    style={{ width: 30, height: 30 }}
                    onClick={icon_click_check2}
                  />
                  <span className={styles.tooltip}>접기</span>
                </>
              )}
            </div>
          </div>

          <div className={styles.line_s}></div>

          {show && (
            <div className={styles.list_view}>
              <div style={{ marginBottom: "2rem" }}>
                <NewsListMap list={news_list_2021} />
              </div>
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
