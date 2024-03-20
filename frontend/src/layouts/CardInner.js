import styled from "styled-components";

export const CardInner = styled.div`
  position: relative;
  flex: 1 0 60%;

  background: --webkit-linear-gradient(
    top,
    rgba(20, 24, 26, 0) 75%,
    rgba(20, 24, 26, 1) 100%
  ) !important;
  background: linear-gradient(
    to bottom,
    rgba(20, 24, 26, 0) 75%,
    rgba(20, 24, 26, 1) 100%
  ) !important;
  z-index: 10;

  background: -webkit-linear-gradient(
    top,
    rgba(49, 49, 58, 0) 75%,
    rgba(49, 49, 58, 1) 100%
  ) !important;
  background: linear-gradient(
    to bottom,
    rgba(49, 49, 58, 0) 75%,
    rgba(49, 49, 58, 1) 100%
  ) !important;

  &::before {
    position: absolute;
    content: "";
    border-radius: 26px;
    -webkit-border-radius: 26px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.1)
    ) !important;
    border-color: rgba(255, 255, 255, 0.08);

    pointer-events: none;
    display: block !important;
    z-index: 0;
    opacity: 1;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
  }

  -webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);

  border-radius: 1.875rem;
  -webkit-border-radius: 1.875rem;
`;
