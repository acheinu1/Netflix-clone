import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;
export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  /* margin-bottom: 10%; */
  margin-bottom: 2%;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  width:40%;
  font-weight: 700;
  margin: auto;
  margin-top: -5%;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;