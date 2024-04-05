import React from "react";
import Chart from "../../Components/Chart";
import {
  PrimaryMainSection,
  SideNav,
  SecondaryBtn,
  SecondaryMainSection,
  SecondaryImg,
  Text,
  LargeText,
  SubCardFlex,
  TextBox,
  ChartCard,
  Text20,
  TextBox_100,
} from "../../Components/CSS-Styled-Commponents";
import { useParams } from "react-router-dom";
import { Students } from "../../constants/SampleAPI";

function StudnetDashboard() {
  const { registeredId } = useParams();

  const student = Students.find(
    (student) => student.registered_id === registeredId
  );

  if (!student) {
    return <div>No student found with the provided registered ID.</div>;
  }
  return (
    <>
      <PrimaryMainSection>
        <SideNav>
          <SecondaryBtn>Dashboard</SecondaryBtn>
        </SideNav>
        <SecondaryMainSection>
          <SubCardFlex>
            <SecondaryImg src={student.image} />
            <TextBox_100>
              <LargeText>
                <i class="fa-solid fa-user-tie"></i> &nbsp;&nbsp;
                {student.name}
              </LargeText>
              <Text>
                <i class="fa-solid fa-id-badge"></i>&nbsp;&nbsp; ID:
                {student.registered_id}
              </Text>
              <Text>
                <i class="fa-solid fa-code-branch"></i>&nbsp;&nbsp;{" "}
                {student.branch}
              </Text>
            </TextBox_100>
          </SubCardFlex>

          <hr />

          <SubCardFlex>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-calendar-check"></i> Total Working Days
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp; &nbsp;
                {student.total_classes}&nbsp;Days
              </Text>
            </TextBox>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-graduation-cap"></i> Number of Presented
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp; &nbsp;{" "}
                {student.presented} &nbsp;Days
              </Text>
            </TextBox>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-square-xmark"></i> Number of Absents
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp; &nbsp;{" "}
                {student.absents} &nbsp;Days
              </Text>
            </TextBox>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-star"></i> Toatal Percentage
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp;&nbsp;{student.cgpa}
                &nbsp; CGPA
              </Text>
            </TextBox>
          </SubCardFlex>

          <SubCardFlex>
            <ChartCard>
              <Chart />
            </ChartCard>
            <TextBox_100>
              <Text20>Achivements :</Text20>
              <Text>
                <i class="fa-solid fa-bullseye"></i>&nbsp;&nbsp;{" "}
                {student.achievements}
              </Text>
            </TextBox_100>
          </SubCardFlex>
        </SecondaryMainSection>
      </PrimaryMainSection>
    </>
  );
}

export default StudnetDashboard;
