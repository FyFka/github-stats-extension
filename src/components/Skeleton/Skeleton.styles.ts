import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(150%);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 20px auto;
  padding: 10px 15px;
  background-color: transparent;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
`;

export const Block = styled.div`
  width: 100%;
  height: 128px;
  background-color: var(--color-canvas-subtle);
`;

export const Text = styled.div`
  width: 100%;
  height: 14px;
  margin-bottom: 8px;
  background-color: var(--color-canvas-subtle);
`;

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${loadingAnimation} 1.5s infinite;
`;

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--color-action-list-item-default-hover-bg);
  transform: skewX(-20deg);
  box-shadow: 0 0 50px 50px rgba(255, 255, 255, 0.02);
`;

export const Section = styled.div.attrs({ className: "border-top color-border-muted pt-3 mt-3" })``;
