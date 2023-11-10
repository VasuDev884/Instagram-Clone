import styled from "styled-components";

export const StoryHolder = styled.div`
  margin-bottom: 10px;
  margin-left: 22%;
  width: 45rem;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StorysImg = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const Div = styled.div`
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: black;
  color: black;
  &:hover {
    background-color: black;
  }
`;

export const Div2 = styled.div`
  margin-left: 25%;
`;

export const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexChat = styled.div`
  display: flex;
`;

export const RequestImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  margin-bottom: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

export const RequestHolder = styled.div`
  height: 450px;
  overflow: auto;
  width: 300px;
  margin-top: 20px;
  position: absolute;
  margin-left: 40px;
  &::-webkit-scrollbar {
    background-color: #dad9d9;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  &::-webkit-scrollbar-thumb {
    background: #6e6c6c;
  }
`;

export const RequestFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 10px;
  padding-left: 10px;
  line-height: 1px;
`;

export const Suggested = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const Follow = styled.h6`
  margin-left: 70px;
  color: blue;
  font-size: 13px;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: white;
  width: 400px;
  height: 300px;
  border-radius: 10px;
`;

export const Button1 = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
border: none;
border-top:1px solid gray ;
border-bottom:1px solid gray ;
cursor: pointer;
  color: red;
  font-weight: 600;
  &:hover{
    background-color: lightgray;
  }
`;

export const Button2 = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  margin-top: -2px;
  font-weight: 600;
cursor: pointer;


  border-radius: 0 0px 10px 10px ;
   &:hover{
    background-color: lightgray;
    border-top:1px solid gray ;
  }
`;

export const ImgHolder = styled.div`
  width: 120px;
  height: 120px;
  background-color: black;
  border-radius: 50%;
`;

export const NameHolder = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 20px;
  font-weight: 700;
`;

export const MainDIv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ButtonHolder = styled.div`
  margin-top: 5%;
`;

export const BackgroundBlack = styled.div`
  background-color: #00000084;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
