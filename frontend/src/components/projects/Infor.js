import styled from "styled-components";

const Infor = styled.section`
  position: fixed;
  top: 1rem;
  right: 1rem;
  left: 1rem;
  // background: rgba(26, 32, 44, 1);
  background: #373737;
  color: #fff;
  animation: inforOpen 1.25s ease-in-out forwards;

  @keyframes inforOpen {
    0% {
      transform: translateY(-30rem);
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

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
    rgba(49, 49, 58, 0.9) 75%,
    rgba(49, 49, 58, 1) 100%
  ) !important;
  --webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);

  z-index: 115;
  border-radius: 0.625rem;

  &::before {
    content: "";
    position: fixed;
    // background: rgba(0, 0, 0, 0.35);
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.1)
    ) !important;
    border-radius: 0.625rem;
    inset: 0;
  }

  .info {
    &__container {
      position: relative;
      height: 100%;
      width: 100%;
    }

    &__close-btn {
      background-color: silver;
      padding: 0.35rem 0.5rem;
      margin: 0.5rem 0.5rem 0 0;
      border: none;
      outline: none;
      cursor: pointer;
    }

    &__close {
      text-align: end;

      svg {
        font-size: 1rem;
        color: black;
      }

      &::after {
        content: "";
        display: inline-block;
        background: #fff;
        height: 0.0625rem;
        width: 100%;
        margin-bottom: 0.625rem;
      }
    }

    &__content {
      position: relative;
      padding: 0 1rem 1rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (min-width: 48em) {
        flex-direction: row;
      }
    }

    &__img-content {
      // height: 100%;
      flex: 1 0 45%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &__text-content {
      display: flex;
      gap: 0.5em;
      flex-direction: column;
    }

    &__buttons {
      display: flex;
      gap: 1rem;
      margin-top: 0.5em;

      a {
        background: rgba(26, 32, 44, 1);
        background-color: silver;
        padding: 0.5rem;
        color: black;
        border-radius: 0.5rem;
      }

      svg {
        margin-right: 0.25rem;
      }
    }

    &__tools-items {
      display: flex;
      align-items: center;
      gap: 0.5em;
      flex-wrap: wrap;
      max-width: 800px;
      padding: 1em 0;
    }

    &__tools-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5em;
      align-items: center;
      padding: 0.25rem;
      -webit-border-radius: 0.75rem;
      border-radius: 0.75rem;
      text-align: center;

      &:hover {
        background: hsl(0, 0%, 100%);
        color: #242424;
        transition: all 0.4s ease-in-out;
      }
    }

    &__tools-icon {
      -webkit-border-radius: 0.625rem;
      border-radius: 0.625rem;
      width: 2rem;
      height: 2rem;

      // color: #4caf51;
      font-size: 1.5rem;
    }

    &__tooltip {
      position: relative;
      font-size: 0.875rem;
    }

    &__tools-icon {
      background: linear-gradient(
        135deg,
        rgba(76, 175, 81, 0.15) 0%,
        rgba(76, 175, 81, 0.01) 100%
      );
    }

    &__project-info {
      margin-bottom: 0.5em;
    }

    &__tools-title,
    &__project-info {
      padding: 0.0625rem 0.5rem;
      margin-right: 0.5rem;
      font-weight: 500;
      font-size: 0.875rem;
      color: #323232;
      background-color: #4caf51;
      width: fit-content;

      -moz-border-radius: 0.25rem;
      -webkit-border-radius: 0.25rem;
      -khtml-border-radius: 0.25rem;
      border-radius: 0.25rem;
    }

    &__title {
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.0625rem;
        display: block;

        background: -moz-radial-gradient(
          left,
          ellipse cover,
          rgba(197, 202, 213, 0.15) 0%,
          rgba(255, 255, 255, 0) 70%
        );
        background: -webkit-radial-gradient(
          left,
          ellipse cover,
          rgba(197, 202, 213, 0.15) 0%,
          rgba(255, 255, 255, 0) 70%
        );
        background: radial-gradient(
          ellipse at left,
          rgba(197, 202, 213, 0.15) 0%,
          rgba(255, 255, 255, 0) 70%
        );
      }
    }

    &__title {
      // font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.7;
      padding: 0;
    }

    &__text-desc {
      p {
        font-size: 1.0625rem;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default Infor;
