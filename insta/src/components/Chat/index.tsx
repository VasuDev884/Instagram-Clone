import {
  Button,
  ChatDiv,
  ChatHolder,
  ChatImgDiv,
  Direct,
  FLexHolder,
  Flex,
  FlexBox,
  Get,
  Hedding4,
  Hedding5,
  Hover,
  IconsWrapper,
  ImgHolder,
  Input,
  InputHolder,
  MainChatHolder,
  Menu,
  MessageIconHolder,
  NameHolder,
  Options,
  PrimaryGeneral,
  Send,
  SendMessageHolder,
} from "./subComponents";
import { DummyData } from "../demoArray";
import { LuEdit } from "react-icons/lu";
import { GrCircleInformation } from "react-icons/gr";
import { RiGalleryFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { PiMessengerLogo } from "react-icons/pi";

export const Chat = () => {
  const [Hide, setHide] = useState<any>(false);
  const [Message, setMessage] = useState<any>([]);
  const HandleClick = (ids: any) => {
    const newData = DummyData.filter((data: any) => data.name=== ids);
    setMessage(newData);
    setHide(true);
  };

  
  const arr = DummyData;
  
  const unique = arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item.name === obj.name) === index
  );
  let FilterName = unique;
  console.log(FilterName)
  

  return (
    <>
      <ChatDiv>
        <Menu>
          <Direct>
            <h4>NAME</h4> <LuEdit style={{ fontSize: "20px" }} />
          </Direct>
          <Options>
            <PrimaryGeneral style={{ fontWeight: "700" }}>
              Messages
            </PrimaryGeneral>
            <PrimaryGeneral style={{ color: "gray" }}>Requests</PrimaryGeneral>
          </Options>

          <ChatHolder>
            {FilterName.map((e: any, index: any) => (
              <div
                key={index}
                onClick={() => {
                  HandleClick(e.name);
                }}
              >
                <FlexBox>
                  <ImgHolder>
                    <img src={e.img} alt="" />
                  </ImgHolder>
                  <div>
                    <h4>{e.name}</h4>
                    <h5>
                      {e.post} . {e.time}
                    </h5>
                  </div>
                </FlexBox>
              </div>
            ))}
          </ChatHolder>
        </Menu>

        <NameHolder>
          {!Hide && (
            <SendMessageHolder>
              <MessageIconHolder>
                <PiMessengerLogo style={{ fontSize: "50px" }} />
              </MessageIconHolder>
              <Hedding4>Your messages</Hedding4>
              <Hedding5>
                Send private photos and messages to a friend or group
              </Hedding5>
              <Button>Send Message</Button>
            </SendMessageHolder>
          )}

          {Hide &&
            Message.slice(0,1).map((e: any, index: any) => (
              <FLexHolder key={index}>
                <Flex>
                  <ChatImgDiv>
                    <img src={e.img} alt="" />
                  </ChatImgDiv>
                  <div>{e.name}</div>
                </Flex>
                <Hover>
                  <GrCircleInformation style={{ fontSize: "25px" }} />
                </Hover>
              </FLexHolder>
            ))}

          {Hide && (
            <div>
              <MainChatHolder>
                {Message.map((e: any, index: any) => (
                  <div key={index}>
                    {e.message === "send" ? (
                      <Send>{e.send}</Send>
                    ) : e.message === "get" ? (
                      <Get>{e.get}</Get>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </MainChatHolder>
              <InputHolder>
                <Input type="text" placeholder="Message..." />
                <IconsWrapper>
                  <div>
                    <RiGalleryFill
                      style={{ fontSize: "25px", fontWeight: "200" }}
                    />
                  </div>
                  <div>
                    <AiOutlineHeart
                      style={{ fontSize: "25px", fontWeight: "200" }}
                    />
                  </div>
                </IconsWrapper>
              </InputHolder>
            </div>
          )}
        </NameHolder>
      </ChatDiv>
    </>
  );
};
