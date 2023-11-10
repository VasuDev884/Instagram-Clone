import { styled } from "styled-components";

// interface ChatWrapperProps {
//   justifycontent: string;
// }

export const ChatDiv = styled.div`
  margin: 10px 40px;
  border: 1px solid #cacdcb;
  border-radius: 10px;
  display: flex;
  margin-left: 8%;
`;

export const Menu = styled.div`
  width: 35%;
`;

export const Direct = styled.div`
  height: 5rem;
  border: 1px solid #cacdcb;
  border-top: none;
  border-right:none ;
  border-left: none;
  padding: 0px 10px;
  align-items: center;
  display: flex;
  font-size: large;
  justify-content: space-between;
  font-weight: 500;
`;

export const EditIconsHolder = styled.div`
  position: absolute;
  margin-left: 28%;
`;

export const Options = styled.div`
  height: 3rem;
  border: 1px solid #cacdcb;
  border-right:none ;
  display: flex;
  align-items: center;
  border-top: 0px;
  border-left: 0px;
  justify-content: space-between;
`;

export const PrimaryGeneral = styled.div`
  width: 20%;
  justify-content: center;
  display: flex;
  height: 73%;
  margin-top: 13.5px;
  font-weight: 500;
  cursor: pointer;
`;

export const ChatHolder = styled.div`
   height: 570px;
  overflow: auto;
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

export const ImgHolder = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  line-height: 10px;
  cursor: pointer;
  &:hover {
    background-color: #cacdcb;
  }
  padding-left: 10px;
`;

export const ChatImgDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 10px;
`;

export const NameHolder = styled.div`
  width: 65%;
  border-left:1px solid #cacdcb ;
`;
export const FLexHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 30px;
  border-bottom: 1px solid #cacdcb;
  height: 5rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const InputHolder = styled.div`
  position: sticky;
  padding: 0px 60px 0px 20px;
`;

export const MainChatHolder = styled.div`
  height: 550px;
  overflow: auto;
  padding: 0px 20px 10px 20px;
  margin-bottom: 10px;
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

export const Input = styled.input`
  border: 1.5px solid #bdbebd;
  padding: 0px 20px;
  width: 100%;
  height: 35px;
  border-radius: 20px;
`;
export const Get = styled.div`
  margin-right: 50%;
  float: left;
  width: fit-content;
  background-color: gray;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Send = styled.div`
 margin-left: 50%;
  width: fit-content;
  float: right;
  position: sticky;
  background-color: gray;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Hover = styled.div`
&:hover{
  cursor: pointer;
}
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  position: sticky;
  margin-top: -30px;
  margin-left: 95%;
`

export const SendMessageHolder = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Hedding4 = styled.h4`
  margin-bottom: -7px;
`
export const Hedding5 = styled.h5`
color: #464444;
`
export const Button = styled.button`
  background-color: #0095f6;
  border: none;
  width: 130px;
  height: 25px;
  border-radius: 4px;
`

export const MessageIconHolder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  justify-content: center;
  display: flex;
  align-items: center;
  border: 2px solid black;
`