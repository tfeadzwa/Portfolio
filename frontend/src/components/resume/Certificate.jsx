import styled from "styled-components";
import { useMyContext } from "../../provider/useMyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DivOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 111;

  &::before {
    content: "";
    position: absolute;
    background: #000;
    inset: 0;
    opacity: 0.8;
  }
`;

const DivCert = styled.div`
  position: relative;
  z-index: 112;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically and horizontally */
  color: #fff;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  max-width: ${(props) => props.$zoom}; /* Set a maximum width for the image */
  max-height: ${(props) => props.$zoom};
  height: auto; /* Allow the height to adjust proportionally */
  transition: all 0.3s ease;
  animation: imageAnimation 0.5s ease-in-out forwards;

  @keyframes imageAnimation {
    0% {
      -webkit-transform: scale(0.2);
      transform: scale(0.2);
      opacity: 0.5;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CustomizeImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1.25rem;
  padding: 1.125rem 0;
  padding-right: 1.125rem;
  background: rgba(0, 0, 0, 0.5);

  svg {
    height: 1.12rem;
    cursor: pointer;
  }

  .fa-xmark {
    height: 1.4rem;
  }
`;

const Certificate = () => {
  const { imgSrc, toggleImgOpen } = useMyContext();
  const [zoomLevel, setZoomlevel] = useState(85);
  const [imgIndex, setImgIndex] = useState(0);

  console.log(imgIndex);

  const zoomIn = () => {
    zoomLevel !== 200 && setZoomlevel((prevZoomLevel) => prevZoomLevel + 10);
  };

  const zoomOut = () => {
    zoomLevel !== 85 && setZoomlevel((prevZoomLevel) => prevZoomLevel - 10);
  };

  const nextImg = () => {
    imgIndex < imgSrc.length - 1 && setImgIndex(imgIndex + 1);
  };

  const prevImg = () => {
    imgIndex > 0 && setImgIndex(imgIndex - 1);
  };

  return (
    <>
      <DivOverlay>
        <DivCert>
          {/* <Image $zoom={zoomLevel + "%"} src={imgSrc} alt="Certificate" /> */}

          <FontAwesomeIcon
            icon="circle-chevron-left"
            onClick={prevImg}
            style={{
              paddingRight: "0.5rem",
              fontSize: "1.75rem",
              cursor: "pointer",
              display: imgSrc.length > 1 ? "block" : "none",
            }}
          />
          <Image
            $zoom={zoomLevel + "%"}
            src={imgSrc[imgIndex]}
            alt="Certificate"
          />
          <FontAwesomeIcon
            icon="circle-chevron-right"
            onClick={nextImg}
            style={{
              paddingLeft: "0.5rem",
              fontSize: "1.75rem",
              cursor: "pointer",
              display: imgSrc.length > 1 ? "block" : "none",
            }}
          />

          <CustomizeImg>
            <a
              href={imgSrc}
              alt="Image description"
              target="_blank"
              style={{ color: "#fff" }}
              // download={imgSrc}
            >
              <FontAwesomeIcon icon="download" />
            </a>

            <FontAwesomeIcon
              icon="search-minus"
              onClick={zoomOut}
              style={{
                display: zoomLevel > 90 ? "block" : "none",
                transition: "all 0.5s ease",
              }}
            />
            <FontAwesomeIcon icon="search-plus" onClick={zoomIn} />
            <FontAwesomeIcon icon="close" onClick={toggleImgOpen} />
          </CustomizeImg>
        </DivCert>
      </DivOverlay>
    </>
  );
};

export default Certificate;
