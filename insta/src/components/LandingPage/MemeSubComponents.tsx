import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 49rem;
  margin-left: 20px;
  border-bottom: 1.5px solid #bdbebd;
  border-radius:5px ;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px ;
`;

export const NameHolder = styled.div`
    display: flex;
    align-items: center;
` 

export const Profile = styled.div`
  width: 50px;
  height: 50px;
  background-color: antiquewhite;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Img = styled.div`
  background-color: black;
  height: 65%;
  width: 100%;
`;

export const IconHolder = styled.div`
  height: 35px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsDiv = styled.div`
    width: 100px;
`
export const IconsHolderCaption = styled.div`
width:20%;
display: flex;
justify-content: space-between;
`

export const Likes = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #5e5b5b;
`

export const CaptionSpan =styled.span`
  font-weight: 500;
  font-size: 17px;
  letter-spacing: -1px;
`

export const Caption = styled.div`
font-size: 16px;
font-weight: 400;
margin: 5px 0px;
`

export const Comments = styled.div`
  font-size: 17px;
  color: #4c4b4b;
  margin-bottom: 5px;
`

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 40px;
  &:focus{
    outline: none;
  }
`