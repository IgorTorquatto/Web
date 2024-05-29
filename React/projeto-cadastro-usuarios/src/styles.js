import styled from "styled-components";
import Background from "./assets/bg-1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 80px;
  text-align: center;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;
  margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    color: #ffffff;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 34px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: rgba(0,0,0,0.8);
    border-radius: 14px;
    border: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;