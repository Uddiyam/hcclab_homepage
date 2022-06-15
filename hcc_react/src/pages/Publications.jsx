import React from "react";
import Header from "../components/Header";
import PublicationsList from "../components/PublicationsList";
import styles from "../styles/Publications.module.css";

export default function Publications() {
  const publicationsData = [
    {
      title: "Journals",
      items: [
        {
          writers: ["Shin, K.", "Park, K.*"],
          subject:
            "“Development and Testing of an IoT Application to Support Infant Feeding: A Design Thinking Approach“",
          type: "In preparation",
        },
        {
          writers: ["Shin, K.", "Lee, J.", "Park, K.*"],
          year: "2022",
          subject:
            "“Hands-free Presentation Tool with Co-speech Gesture Interactions: A Wizard-of-Oz Study“, Human-centric Computing and Information Sciences",
          type: "SCIE",
        },
        {
          writers: ["Park, K.", "Han, S. H.", "Lee, H.", "Kwahk, J."],
          year: "2021",
          subject:
            "Shared steering control: How strong and how prompt should the intervention be for a better driving experience?. International Journal of Industrial Ergonomics, 86, 103213.",
          type: "SSCI",
        },
        {
          writers: [
            "Kim, A.",
            "Yun, S. J.",
            "Sung, K. S.",
            "Kim, Y.",
            "Jo, J. Y.",
            "Cho, H.",
            "Park, K.",
            "...",
            "Seo, H. G.",
          ],
          year: "2021",
          subject:
            "Exercise Management Using a Mobile App in Patients With Parkinsonism: Prospective, Open-Label, Single-Arm Pilot Study. JMIR mHealth and uHealth, 9(8), e27662.",
          type: "SCIE",
        },
        {
          writers: ["Lee, J.", "So, H.-J.*", "Ha, S.", "Kim, E.", "Park, K."],
          year: "2021",
          subject:
            "Unpacking Academic Emotions in Asynchronous Video-based Learning: Focusing on Korean Learners’ Affective Experiences, The Asia-Pacific Education Researcher, 30(3), 247-261.",
          type: "SSCI",
        },
        {
          writers: ["Park, K.", "Han, S. H.*", "Kwahk, J."],
          year: "2021",
          subject:
            "Toward trustworthy and comfortable lane keeping assistance system: an empirical study of the level of haptic authority, International Journal of Human–Computer Interaction, 37(14), 1347-1363.",
          type: "SSCI",
        },
        {
          writers: ["Park, K.", "Kim, D.", "Han, S. H.*"],
          year: "2020",
          subject:
            "Usability of the size, spacing, and operation method of virtual buttons with virtual hand on head-mounted displays”, International Journal of Industrial Ergonomics, 76, 102939.",
          type: "SSCI",
        },
        {
          writers: [
            "Lee, M.",
            "Kwahk, J.*",
            "Han, S. H.",
            "Jeong, D.",
            "Park, K.",
            "Oh, S.",
            "Chae, G.",
          ],
          year: "2020",
          subject:
            "Developing personas & use cases with user survey data: A study on the millennials’ media usage. Journal of Retailing and Consumer Services, 54, 102051.",
          type: "SSCI",
        },
        {
          writers: ["Park, K.", "So, H. J.*", "Cha, H."],
          year: "2019",
          subject:
            "Digital equity and accessible MOOCs: Accessibility evaluations of mobile MOOCs for learners with visual impairments. Australasian Journal of Educational Technology, 35(6), 48-63.",
          type: "SSCI",
        },
        {
          writers: [
            "Park, K.",
            "Kwahk, J.*",
            "Han, S. H.",
            "Song, M.",
            "Choi, D. G.",
            "Jang, H.",
            "…",
            "Jeong, I. S.",
          ],
          year: "2019",
          subject:
            "Modelling the intrusive feelings of advanced driver assistance systems based on vehicle activity log data”, International journal of automotive technology, 20(3), 455-463.",
          type: "SCIE",
        },
        {
          writers: [
            "Park, K.",
            "Kwahk, J.*",
            "Han, S. H.",
            "Song, M.",
            "Choi, D. G.",
            "Jang, H.",
            "Kim, D.",
          ],
          year: "2018",
          subject:
            "Measuring the intrusive feeling of a LKAS. Journal of the Ergonomics Society of Korea, 37(4), 459-473.",
          type: "KCI",
        },
        {
          writers: [
            "Jeong, D. Y.",
            "Han, S. H.*",
            " Kwahk, J.",
            "Park, J.",
            "Lee, M.",
            "Park, K.",
            "…",
            "Jeong, D.",
          ],
          year: "2017",
          subject:
            "Suggesting Pedestrian Experience Principles of the Mobility Handicapped. The Japanese Journal of Ergonomics, 53(Sup.), 412-415",
        },
        {
          writers: [
            "Lee, M.",
            "Kwahk, J.*",
            "Han, S. H.",
            "Jeong, D.",
            "Park, K.",
            "Kim, J. H.",
            "Chae, G.",
          ],
          year: "2017",
          subject:
            "A Survey on the Multi-device Media Usage of Millennials”, Journal of the Ergonomics Society of Korea, 36(6), 645-663",
          type: "KCI",
        },
      ],
    },
    {
      title: "Conferences (Selective)",
      items: [
        {
          writers: ["Park, K.", "Han, S. H.", "Kwahk, J."],
          year: "2018",
          subject:
            "“The Effects of Steering Control Strategy in a Lane Keeping Assistance System on the Driving Experience”, HCI International 2018, Las Vegas, USA",
        },
        {
          writers: ["Cho, H.", "Park, K.", "Choi, S."],
          year: "2018",
          subject:
            "“Equal-Level Interaction: A Case Study for Improving User Experiences of Visually-Impaired and Sighted People in Group Activities”, IEEE Haptic, Audio and Visual Environments and Games (HAVE 2018), Dalian, China",
        },
        {
          writers: ["Park, K.", "Han, S. H."],
          year: "2017",
          subject:
            "“An eye movement analysis with process mining techniques for usability evaluation”, Ergonomics Society of Korea (2017 ESK fall conference), Hoengseong, Korea",
          award: "Excellent student paper award",
        },
        {
          writers: ["Park, K.", "Kwahk, J.", "Han, S. H."],
          year: "2017",
          subject:
            "“Designing a Feeding Support System for Infants using IoT”, Advances in Computer-Human Interactions (ACHI 2017), Nice, France",
        },
        {
          writers: ["Oh, S.", "Park, K.", "Kwon, S.", "So, H.-J."],
          year: "2016",
          subject:
            "“Designing a multi-user interactive simulation using AR glasses”, ACM Tangible, Embeded, and Embodied Interaction (TEI 2016), Eindhoven, Netherlands",
        },
        {
          writers: ["Kwon, S.", "Oh, S.", "Park, K.", "Kim, S.", "So, H.-J."],
          year: "2015",
          subject:
            "“Children as Participatory Designers of a New Type of Mobile Social Learning Application”, ACM MobileHCI 2015, Copenhagen, Denmark",
        },
        {
          writers: [
            "Kim, S.",
            "So, H.-J.",
            "Kwon, S.",
            "Oh, S.",
            "Park, K.",
            "Ko, M.",
            "...",
            "Oh, K.",
          ],
          year: "2015",
          subject:
            "“Towards Designing a Mobile Social Learning Application with Meaningful Gamification Strategies”, IEEE Advanced Learning Technologies (ICALT 2015), Hualien, Taiwan",
        },
        {
          writers: ["Oh, S.", "Park, K.", "So, H.-J."],
          year: "2015",
          subject:
            "“From Crowdsourcing to Crowdlearning through a Pin-based Annotation System”, Computer Supported Collaborative Learning (CSCL 2015) workshop, Gothenburg, Sweden",
        },
        {
          writers: ["So, H.-J.", "Kwon, S.", "Oh, S.", "Park, K.", "Kim, S."],
          year: "2015",
          subject:
            "“Designing a Mobile Social Learning Application for Children's Transformative Play”, ACM CHI 2015 workshop, Seoul, Korea",
        },
        {
          writers: ["Park, K.", "Goh, T.", "So, H.-J."],
          year: "2015",
          subject:
            "“Toward accessible mobile application design: developing mobile application accessibility guidelines for people with visual impairment”, ACM HCI Korea 2015, Seoul, Korea",
          award: "Best paper award",
        },
        {
          writers: [
            "So, H.-J.",
            "Yoon, H.-G.",
            "Choi, H.-S.",
            "Lee, H.-C.",
            "Park, K.",
          ],
          year: "2014",
          subject:
            "“Identifying User Perceptions Toward Integrating Mobile Applications in Science Education”, Computers in Education (ICCE 2014), Nara, Japan",
        },
        {
          writers: ["Park, K.", "Oh, S.", "Lee, H.-C.", "So, H.-J."],
          year: "2014",
          subject:
            "“Dynamic Feedback Mechanism for Maximizing Interaction in Online Social Network Services”, IEEE/ACM Advances in Social Networks Analysis and Mining (ASONAM 2014), Beijing, China",
        },
      ],
    },
  ];

  return (
    <div className={styles.publicationsWrapper}>
      <Header url={4} />
      <div className={styles.publicationsTitle}>PUBLISH OR PERISH</div>
      <div className={styles.publicationsContent}>
        {publicationsData.map((pd, i) => (
          <PublicationsList pd={pd} order={i % 2 ? false : true} key={i} />
        ))}
      </div>
    </div>
  );
}
