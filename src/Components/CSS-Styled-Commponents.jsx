import styled from "styled-components";
import { COLORS } from "./Colors";

export const MainSection = styled.div`
  padding: 20px 200px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-image: ${COLORS.GRADIENT_2};
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1430px) {
    padding: 20px 100px;
  }

  @media only screen and (max-width: 420px) {
    padding: 50px 20px;
    flex-wrap: wrap-reverse;
    gap: 50px;
    height: 100%;
  }
`;

export const PrimaryMainSection = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  background-color: #a3cce24b;
`;

export const SecondaryMainSection = styled.div`
  padding: 25px;

  @media only screen and (max-width: 420px) {
    padding: 30px 10px;
  }
`;

export const SubSection = styled.div`
  padding: 15px 0px;
  width: fit-content;
  height: fit-content;
  background-color: ${COLORS.PRIMARY_100};
  border-radius: 15px;
  box-shadow: 2px 2px 3px black;

  @media only screen and (max-width: 420px) {
    width: 90vw;
  }
`;

export const PrimaryCard = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.PRIMARY_100};
  gap: 15px;
  height: 55vh;
  overflow: hidden;
  overflow-y: scroll;

  @media only screen and (max-width: 420px) {
    padding: 0px 10px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  box-shadow: 2px 2px 3px gray;
`;

export const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: center;
`;

export const SubCardFlex = styled.div`
  padding: 25px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media only screen and (max-width: 420px) {
    padding: 0px 10px;
    margin-bottom: 20px;
  }
`;

export const TextBox_100 = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: white;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 22px 30px;
  box-shadow: 5px 5px 5px gray;
`;

export const TextBox = styled.div`
  width: 240px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: white;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 22px 30px;
  box-shadow: 2px 4px 5px gray;
`;

export const SPAN = styled.div`
  width: 27rem;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

export const SPAN2 = styled.div`
  margin-top: 60px;
  padding: 5px;
  background-color: red;
`;

export const TitleCard = styled.div`
  padding: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: x-large;
  font-weight: bold;
`;

export const LargeText = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: x-large;
  font-weight: bold;
`;

export const Text20 = styled.p`
  font-size: 21px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
`;

export const Text = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: medium;
  color: #656464;
  font-weight: bold;
`;

export const PrimaryImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  box-shadow: -2px 3px 2px gray;
`;
export const SecondaryImg = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 100px;
  background-color: purple;
`;

export const FormImg = styled.img`
  margin-left: 50px;
  width: 250px;
  height: 250px;

  @media only screen and (max-width: 420px) {
    margin-left: 30px;
  }
`;

export const Form = styled.form`
  width: 22rem;
  padding: 25px 45px;
  border: 1px solid gray;
  border-radius: 35px;
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 2px 2px 3px black;
  background-color: ${COLORS.PRIMARY_100};

  @media only screen and (max-width: 420px) {
    width: 80vw;
    padding: 25px 20px;
  }
`;

export const FormInput = styled.input`
  box-shadow: inset 2px 2px 4px gray;
  padding: 15px;
  font-size: medium;
  border-radius: 15px;
  border: 1px solid gray;
`;

export const PrimaryBtn = styled.button`
  padding: 15px 25px;
  color: white;
  font-size: large;
  font-weight: bold;
  background-color: ${COLORS.PRIMARY_1000};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const SecondaryBtn = styled.button`
  color: white;
  font-size: large;
  margin-left: 35px;
  font-weight: bold;
  padding: 15px 55px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  background-color: #2b2e7c;
  border-right: 4px solid ${COLORS.ERROR};
`;

export const SideNav = styled.div`
  height: 100vh;
  background-color: ${COLORS.PRIMARY_1000};
  padding: 25px 15px;
  width: 250px;
  border-right: 2px solid ${COLORS.NEUTRAL_2};

  @media only screen and (max-width: 420px) {
    display: none;
  }
`;

export const ChartCard = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;

  @media only screen and (max-width: 420px) {
    padding: 15px 0px;
  }
`;
