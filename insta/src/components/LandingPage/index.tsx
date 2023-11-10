import React, { useState } from "react";
import {
  BackgroundBlack,
  Button1,
  Button2,
  ButtonHolder,
  Container,
  Div,
  Div2,
  FlexChat,
  Follow,
  ImgHolder,
  MainDIv,
  NameHolder,
  RequestFlexBox,
  RequestHolder,
  RequestImg,
  Story,
  StoryHolder,
  StorysImg,
  Suggested,
} from "./subComponents";
import { DummyData } from "../demoArray";
import Memes from "./memes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const [Follows, setFollow] = useState(false);
  const [Components, setComponents] = useState(false);
  const [FollowData , setFollowData] = useState<any>([])
  const Following = (index:any) => {
    setFollow(true);
  };
  const ComponentsRender = (ids:any) => {
    setComponents(true);
    const Data = DummyData.filter((data: any) => data.id === ids);
    setFollowData(Data)
  };

  const ComponentsHandle = () => {
    setComponents(false);
    setFollow(false);
  };
  const HandleCancel = () => {
    setComponents(false);
  };
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <Div />,
    prevArrow: <Div />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   const [Message , setMessage] = useState<any>([])
  // const HandleClick = (ids: any) => {
  //   const newData = DummyData.filter((data: any) => data.id === ids);
  //   setMessage(newData)
  // };

  const arr = DummyData;
  
  const unique = arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item.name === obj.name) === index
  );
  let FilterName = unique;
  console.log(FilterName)
  
  

  return (
    <div>
      <FlexChat>
        <StoryHolder>
          <Slider {...settings}>
            {DummyData.map((e: any, index: any) => (
              <div key={index}>
                <Story>
                  <StorysImg>
                    <img src={e.url} alt="" />
                  </StorysImg>
                </Story>
                <Story>{e.name}</Story>
              </div>
            ))}
          </Slider>
        </StoryHolder>
        <div>
          <RequestHolder>
            {DummyData.slice(0, 1).map((e: any, index: any) => (
              <div key={index}>
                <RequestFlexBox>
                  <RequestImg>
                    <img src={e.img} alt="" />
                  </RequestImg>
                  <div>
                    <div>
                      <h5>{e.name}</h5>
                      <h6>
                        {e.post} . {e.time}
                      </h6>
                    </div>
                  </div>
                </RequestFlexBox>
              </div>
            ))}
            <Suggested>
              <div>Suggested for you</div>
              <Link to={"/suggeted"}>
                <div>See All</div>
              </Link>
            </Suggested>
            {FilterName.slice(0,4).map((e: any, index: any) => (
              <div key={index} >
                <RequestFlexBox>
                  <RequestImg>
                    <img src={e.img} alt="" />
                  </RequestImg>
                  <div>
                    <div>
                      <h5>{e.name}</h5>
                      <h6>
                        {e.post} . {e.time}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <Follow onClick={()=>{Following(index)}}>
                      {Follows ? (
                        <span onClick={() =>ComponentsRender(e.id)}>Following</span>
                      ) : (
                        <span>Follow</span>
                      )}
                    </Follow>
                  </div>
                </RequestFlexBox>
              </div>
            ))}
          </RequestHolder>
        </div>
      </FlexChat>
      <Div2>
        <Memes />
      </Div2>

      <div>
        {Components && (
          FollowData.map((e:any , index:any )=>(
            <BackgroundBlack key={index}>
            <Container>
              <MainDIv>
                <ImgHolder></ImgHolder>
                <NameHolder>{e.name}</NameHolder>
              </MainDIv>
              <ButtonHolder>
                <div>
                  <Button1 onClick={ComponentsHandle}>Unfollow</Button1>
                </div>
                <div>
                  <Button2 onClick={HandleCancel}>Cancel</Button2>
                </div>
              </ButtonHolder>
            </Container>
          </BackgroundBlack>
          ))
        
        )}
      </div>
    </div>
  );
}

export default LandingPage;
