import styled from "styled-components";

const HeadingBox = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-weight: 500;
  font-size: 2.2rem;
  opacity: 0.7;
`;

const Heading = () => {
  return <HeadingBox>To-do list</HeadingBox>;
};

export default Heading;
