import styled from "styled-components";
import Background from "../../assets/bg-2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Img = styled.img``;

export const ContainerItems = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  backdrop-filter: blur(45px);
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 80px;
  text-align: center;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 120px;

    &:hover{
      opacity: 0.8;
    }

    //Click:
    &:active{
      opacity: 0.5;
    }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255,255,255,0.25);
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  margin-top: 20px;

  p{
  color: #ffffff;
  font-size: 20px;
  line-height: 28px;
  }

  button{
    background: none;
    cursor: pointer;
    border: none;
  }

  button:hover{
    transform: scale(1.3);
  }


    
`
