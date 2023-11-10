import { useState } from "react";
import {
  HeaderWrapper,
  IconDiv,
  IconText,
  ImgTag,
  ImgWrapper,
  InstIcon,
  InstaHolder,
  SiderIcons,
} from "./subComponent";
import { AiOutlineCompass, AiOutlineHome } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

import { Link } from "react-router-dom";
const Img = require("../../assects/INSTA.png");

const Header = () => {
  const [Text, setText] = useState<any>(false);
  const HandleText = () => {
    setText(true);
  };

  const HandeWidth = () => {
    setText(false);
  };
  return (
    <HeaderWrapper
      style={{
        width: Text ? "1.5%" : "",
      }}
    >
      <InstaHolder>
        <ImgWrapper>
          {!Text && <ImgTag src={Img} alt="" />}
          {Text && (
            <InstIcon>
              <BsInstagram style={{ fontSize: "27px" }} />
            </InstIcon>
          )}
        </ImgWrapper>
      </InstaHolder>
      <InstaHolder>
        <IconDiv
          onClick={HandeWidth}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <Link to={"/"}>
            <SiderIcons>
              <AiOutlineHome style={{ fontSize: "28px" }} />
              {!Text && <IconText>Home</IconText>}
            </SiderIcons>
          </Link>
        </IconDiv>
        <IconDiv
          onClick={HandeWidth}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <SiderIcons>
            <AiOutlineSearch style={{ fontSize: "28px" }} />
            {!Text && <IconText>Search</IconText>}
          </SiderIcons>
        </IconDiv>
        <IconDiv
          onClick={HandeWidth}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <SiderIcons>
            <AiOutlineCompass style={{ fontSize: "28px" }} />
            {!Text && <IconText>Explore</IconText>}
          </SiderIcons>
        </IconDiv>
        <IconDiv
          onClick={HandeWidth}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <SiderIcons>
            <BsCameraReels style={{ fontSize: "28px" }} />
            {!Text && <IconText>Reels</IconText>}
          </SiderIcons>
        </IconDiv>
        <IconDiv
          onClick={HandleText}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <Link to={"/chat"}>
            <SiderIcons>
              <RiSendPlaneFill style={{ fontSize: "28px" }} />
              {!Text && <IconText>Messages</IconText>}
            </SiderIcons>
          </Link>
        </IconDiv>
        <IconDiv
          onClick={HandeWidth}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <SiderIcons>
            <BsHeart style={{ fontSize: "28px" }} />
            {!Text && <IconText>Notification</IconText>}
          </SiderIcons>
        </IconDiv>
        <IconDiv
          onClick={HandeWidth}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <SiderIcons>
            <MdOutlineCreateNewFolder style={{ fontSize: "28px" }} />
            {!Text && <IconText>Create</IconText>}
          </SiderIcons>
        </IconDiv>
        <IconDiv
          onClick={HandeWidth}
          style={{
            marginBottom: Text ? "32px" : "",
          }}
        >
          <Link to={"/profile"}>
            <SiderIcons>
              <AiOutlineUser style={{ fontSize: "28px" }} />
              {!Text && <IconText>Profile</IconText>}
            </SiderIcons>
          </Link>
        </IconDiv>
      </InstaHolder>
    </HeaderWrapper>
  );
};

export default Header;
