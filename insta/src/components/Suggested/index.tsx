import {
  BackgroundBlack,
  Button1,
  Button2,
  ButtonHolder,
  Container,
  ImgHolder,
  MainDIv,
  NameHolder,
  RequestFlexBox,
} from "../LandingPage/subComponents";
import { DummyData } from "../demoArray";
import {
  Button,
  RealName,
  RealNameFollow,
  RequestHolder,
  RequestImg,
  Sugges,
  SuggestedText,
} from "./SuggeestedStyleComponent";
import { useState } from "react";

function Suggested() {
  const [Follows, setFollow] = useState(false);
  const [Components, setComponents] = useState(false);
  const [FollowData, setFollowData] = useState<any>([]);
  const Following = (index: any) => {
    setFollow(true);
  };

  const ComponentsHandle = () => {
    setComponents(false);
    setFollow(false);
  };
  const HandleCancel = () => {
    setComponents(false);
  };

  const ComponentsRender = (ids: any) => {
    setComponents(true);
    const Data = DummyData.filter((data: any) => data.id === ids);
    setFollowData(Data);
  };

  const arr = DummyData;

  const unique = arr.filter(
    (obj, index) => arr.findIndex((item) => item.name === obj.name) === index
  );
  let FilterName = unique;
  console.log(FilterName);

  return (
    <div>
      <Sugges>
        <SuggestedText>
          <h5>Suggested</h5>
        </SuggestedText>
        <RequestHolder>
          {FilterName.map((e: any, index: any) => (
            <div key={index}>
              <RequestFlexBox>
                {/* onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} */}
                <RequestImg>
                  <img src={e.img} alt="" />
                </RequestImg>
                <div>
                  <h5>{e.name}</h5>
                  <RealName>{e.name}</RealName>
                  <RealNameFollow>Followed by {e.name} + 1 more</RealNameFollow>
                </div>
                <div>
                  <div>
                    <Button
                      onClick={() => {
                        Following(index);
                      }}
                      style={{
                        backgroundColor: Follows ? "gray" : "",
                        width: Follows ? "95px" : "",
                        marginLeft: Follows ? "270%" : "",
                      }}
                    >
                      {" "}
                      {Follows ? (
                        <span onClick={() => ComponentsRender(e.id)}>
                          Following
                        </span>
                      ) : (
                        <span>Follow</span>
                      )}
                    </Button>
                  </div>
                </div>
              </RequestFlexBox>
            </div>
          ))}
        </RequestHolder>
      </Sugges>

      <div>
        {Components &&
          FollowData.map((e: any, index: any) => (
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
          ))}
      </div>
    </div>
  );
}

export default Suggested;
