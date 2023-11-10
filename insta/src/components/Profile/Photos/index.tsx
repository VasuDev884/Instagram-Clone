import React, { useState } from "react";
import {
  COmmonDIv,
  PhotosButtons,
  PhotosConatainer,
  Post,
  Saved,
  Tagged,
} from "./PhotosStyledComponents";

function Photos() {
  const [isHover, setHover] = useState(true);
  const [Hover, setHovers] = useState(false);
  const [isHov, setHov] = useState(false);
  const HandleHover = () => {
    setHover(true);
    setHov(false);
    setHovers(false);
  };
  const Hovers = () => {
    setHovers(true);
    setHover(false);
    setHov(false);
  };
  const HandleHov = () => {
    setHov(true);
    setHovers(false);
    setHover(false);
  };
  return (
    <div>
      <PhotosConatainer>
        <PhotosButtons
          onClick={HandleHover}
          style={{
            borderTop: isHover ? "2px solid black" : "",
            fontWeight: isHover ? "700" : "",
          }}
        >
          POST
        </PhotosButtons>
        <PhotosButtons
          onClick={Hovers}
          style={{
            borderTop: Hover ? "2px solid black" : "",
            fontWeight: Hover ? "700" : "",
          }}
        >
          SAVED
        </PhotosButtons>
        <PhotosButtons
          onClick={HandleHov}
          style={{
            borderTop: isHov ? "2px solid black" : "",
            fontWeight: isHov ? "700" : "",
          }}
        >
          TAGGED
        </PhotosButtons>
      </PhotosConatainer>
      {isHover && (
        <COmmonDIv>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </COmmonDIv>
      )}
      {Hover && (
        <COmmonDIv>
          <Saved></Saved>
          <Saved></Saved>
          <Saved></Saved>
          <Saved></Saved>
        </COmmonDIv>
      )}
      {isHov && (
        <COmmonDIv>
          <Tagged></Tagged>
          <Tagged></Tagged>
          <Tagged></Tagged>
          <Tagged></Tagged>
        </COmmonDIv>
      )}
    </div>
  );
}

export default Photos;
