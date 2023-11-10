import {shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Img } from "./StatusViewStyle";


const ViewStatus = () => {
  const { StatusList } = useSelector(
    (state: RootState) => ({
      StatusList: state.StatusListData.setSelectedStatus
    }),
    shallowEqual
  )

  return (
    <> 
        {StatusList.map((e: any, index: any) => (
          <div key={index}> 
            <Img src={e.img} alt="IMG" />
          </div>
        ))}
    </>
  );
};

export default ViewStatus;
