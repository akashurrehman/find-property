import styled from "styled-components";

const SkeletonCard = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  height: 300px;
  animation: pulse 1.5s infinite;
  @keyframes pulse {
    0% {
      background-color: #f0f0f0;
    }
    50% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: #f0f0f0;
    }
  }
`;

export default function PropertySkeleton() {
  return <SkeletonCard />;
}
