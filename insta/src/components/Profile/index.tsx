import React, { useState } from "react";
import {StatusDymmyData} from '../StatusDummyImg'
import ViewStatus from '../Profile/StatusView/StatusView'
import {
  StatusDIv,
  Container,
  IconsSetting,
  ProfileButton,
  ProfileContainer,
  ProfileFollowing,
  ProfileImg,
  ProfileName,
  StatusAdd,
  Statusinner,
  ContainerHighlight,
  Highight,
  HighightInput,
  HighightButton,
  InputHighlight,
  BackgroundBlack,
  StatusImg,
  StatusDisplayInner,
  DivFlex,
} from "./ProfileSubComponents";
import Photos from "./Photos";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { ContainerStatus } from "./StatusView/StatusViewStyle";
import { useDispatch } from "react-redux";
import {StatusList} from '../../redux/statusredux/action'
function Profile() {
  const [Status , setStatusView ] = useState(false)
  const [hightLight, setHightLight] = useState<any>(false);
  const HandleHightlight = () => {
    setHightLight(false);
  };

  const HandleHightlightTrue = () => {
    setHightLight(true);
  };

  const dispatch = useDispatch()

  const StatusView =(ids:any)=>{
    setStatusView(true)
    const newData = StatusDymmyData.filter((data: any) => data.id === ids)
    dispatch(StatusList(newData))
  console.log(newData)
  }
  const StatusViewHandleCLose =()=>{
    setStatusView(false)
  }     

  return (
    <Container>
      <ProfileContainer>
        <ProfileImg>
          <img src="" alt="" />
        </ProfileImg>
        <div>
          <ProfileName>
            Name <ProfileButton>Edit Profile</ProfileButton>{" "}
            <ProfileButton>View Archive</ProfileButton>
            <IconsSetting> Icon</IconsSetting>
          </ProfileName>
          <ProfileName>
            <ProfileFollowing>4 Post</ProfileFollowing>
            <ProfileFollowing>197 Followers</ProfileFollowing>
            <ProfileFollowing>271 following</ProfileFollowing>
          </ProfileName>
          <div>
            Name
            <div>Status</div>
          </div>
        </div>
      </ProfileContainer>
      <StatusDIv>
        {StatusDymmyData.map((e:any , index:any)=>(
          <StatusAdd onClick={()=> StatusView(e.id)} key={index}>
          <StatusDisplayInner>
            <StatusImg src={e.img} alt="img" />
          </StatusDisplayInner>
        </StatusAdd>
        ))}
        <StatusAdd onClick={HandleHightlightTrue}>
          <Statusinner>
            <AiOutlinePlus style={{ fontSize: "40px" }} />
          </Statusinner>
        </StatusAdd>
      </StatusDIv>
      <Photos />
      {hightLight && (
        <BackgroundBlack>
          <ContainerHighlight>
            <Highight>
              <span style={{ marginRight: "31%" }}>New Highlight</span>{" "}
              <RxCross2
                style={{
                  marginRight: "-36%",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={HandleHightlight}
              />
            </Highight>
            <HighightInput>
              <InputHighlight type="text" placeholder="Highlight Name" />
            </HighightInput>
            <HighightButton> Next</HighightButton>
          </ContainerHighlight>
        </BackgroundBlack>
      )}
      {Status?
      <ContainerStatus>
         <RxCross2 style={{ marginLeft:"95%", color:'white', fontSize:'25px' }} onClick={StatusViewHandleCLose}/>
         <DivFlex>
         <ViewStatus/>
         </DivFlex>
         </ContainerStatus>:''}
    </Container>
  );
}

export default Profile;