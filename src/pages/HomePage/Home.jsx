import {
  Card,
  Form,
  FormInput,
  MainSection,
  PrimaryBtn,
  PrimaryCard,
  PrimaryImg,
  SubCard,
  SubSection,
  SPAN,
  SPAN2,
  TitleCard,
  FormImg,
} from "../../Components/CSS-Styled-Commponents";
import { PersonImg, LoginImg } from "../../asserts";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Students } from "../../constants/SampleAPI";

function Home() {
  const navigate = useNavigate();
  const [registeredId, setRegisteredId] = useState("");
  const sortedStudents = [...Students].sort((a, b) => b.cgpa - a.cgpa);
  const topFiveStudents = sortedStudents.slice(0, 5);
  console.log(topFiveStudents);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/studentDashboard/${registeredId}`);
  };

  return (
    <>
      <MainSection>
        <SubSection>
          <PrimaryCard>
            <TitleCard>
              Highest Marks <i class="fa-solid fa-trophy"></i>
            </TitleCard>

            {topFiveStudents.map((data) => (
              <Card key={data.id}>
                <PrimaryImg src={data.image} />
                <SPAN>
                  <SubCard>
                    <h3>{data.name}</h3>
                    <p>{data.registered_id}</p>
                  </SubCard>
                  <SubCard>
                    <h3>{data.cgpa}</h3>
                    <p>Total Marks</p>
                  </SubCard>
                </SPAN>
              </Card>
            ))}
          </PrimaryCard>
        </SubSection>

        <Form>
          <FormImg src={LoginImg} />
          <FormInput
            placeholder="Enter code / Registerd ID"
            value={registeredId}
            onChange={(e) => {
              setRegisteredId(e.target.value);
            }}
          />
          <PrimaryBtn type="submit" onClick={handleSubmit}>
            Submit
          </PrimaryBtn>
        </Form>
      </MainSection>
    </>
  );
}

export default Home;
