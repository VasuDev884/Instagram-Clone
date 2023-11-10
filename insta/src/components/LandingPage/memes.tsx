import React from "react";
import {
  Container,
  Header,
  IconHolder,
  IconsHolderCaption,
  Img,
  NameHolder,
  Profile,
  Likes,
  CaptionSpan,
  Caption,
  Comments,
  Input,
} from "./MemeSubComponents";
import { DummyData } from "../demoArray";
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessage} from 'react-icons/bi'
import {LuSend} from 'react-icons/lu'
import {FiBookmark} from 'react-icons/fi'

function Memes() {
  return (
    <div>
      {DummyData.map((e: any, index: any) => (
        <Container key={index}>
          <Header>
            <NameHolder>
              <Profile></Profile>
              <div>{e.name}</div>
            </NameHolder>
            <div><BiDotsHorizontalRounded style={{fontSize:'30px'}}/></div>
          </Header>
          <Img></Img>
          <IconHolder>
            <IconsHolderCaption><AiOutlineHeart style={{fontSize:'28px'}}/> <BiMessage style={{fontSize:'28px'}}/> <LuSend style={{fontSize:'28px'}}/></IconsHolderCaption>
            <div><FiBookmark style={{fontSize:'28px'}}/></div>
          </IconHolder>
          <Likes>999 likes</Likes>
          <Caption> <CaptionSpan>Name</CaptionSpan> Caption</Caption>
          <Comments> View all 9,999 comments </Comments>
          <div><CaptionSpan>Name</CaptionSpan> Comment</div>
          <div> <Input type="text" placeholder="Add  a comment..." /> </div>
        </Container>
      ))}
    </div>
  );
}

export default Memes;
