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

  const zoomIn = () => {
    zoomLevel !== 200 && setZoomlevel((prevZoomLevel) => prevZoomLevel + 10);
  };

  const zoomOut = () => {
    zoomLevel !== 85 && setZoomlevel((prevZoomLevel) => prevZoomLevel - 10);
  };

  return (
    <>
      <DivOverlay>
        <DivCert>
          <Image $zoom={zoomLevel + "%"} src={imgSrc} alt="Certificate" />
          <CustomizeImg>
            <a
              target="_blank"
              href={imgSrc}
              download="Tafadzwa Tanyanyiwa's Resume"
              style={{ color: "#fff" }}
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
