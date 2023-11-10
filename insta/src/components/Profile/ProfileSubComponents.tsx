import styled from "styled-components";

export const Container = styled.div`
  margin-left: 28%;
  margin-top: 3%;
  width: 60%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  padding: 0px 40px;
`;

export const ProfileImg = styled.div`
  width: 140px;
  height: 140px;
  background-color: black;
  border-radius: 50%;
  margin-right: 100px;
`;

export const ProfileName = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
  display: flex;
`;

export const ProfileButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  margin-left: 20px;
  border: none;
  background-color: #b2afaf;
`;

export const IconsSetting = styled.div`
  margin-left: 20px;
`;

export const ProfileFollowing = styled.div`
  margin-right: 20px;
`;

export const Status = styled.div`
  border-radius: 1px sloid gray;
  padding: 2px;
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 8%;
`;

export const StatusDIv = styled.div`
  margin-top: 70px;
  display: flex;
  border-bottom: 1px solid gray;
  padding: 0px 30px;
`;

export const StatusAdd = styled.div`
  padding: 2px;
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 8%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Statusinner = styled.div`
  padding: 2px;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: lightgray;
`;

export const StatusDisplayInner = styled.div`
  padding: 2px;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: lightgray;
  overflow: hidden;
`;

export const StatusImg = styled.img`
  width: 100%;
  height: 100%;
 
`


export const ContainerHighlight = styled.div`
    width: 35%;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    z-index: 1;
`

export const Highight = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 25%;
  font-weight: 500;
`
export const HighightInput = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 50%;
  border-top: 1px solid gray;
  border-bottom:  1px solid gray;
` 
export const HighightButton = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 25%;
  font-weight: 500;
  font-size: 16px;
cursor: pointer;
  &:hover{
    background-color: #aca9a9;
    border-radius: 0px 0px 10px 10px;
  }
` 

export const InputHighlight = styled.input`
  width: 80%;
  height: 45px;
  background-color: #b0adad;
  border: none;
  color: black;
  padding: 0 10px;
  border-radius:10px;
` 

export const BackgroundBlack = styled.div`
  background-color: #00000084;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
`

export const DivFlex = styled.div`
width: 100%;
height: 100%;
   justify-content: center;
  align-items: center;
  display: flex;
`