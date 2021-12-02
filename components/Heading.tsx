import styled from "styled-components";

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const HeadingBox = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-weight: 500;
  font-size: 2.4rem;
  opacity: 0.7;
`;

const Heading = () => {
  return (
    <>
      <HeadingContainer>
        <HeadingBox>To-Do List</HeadingBox>
      </HeadingContainer>
    </>
  );
};

export default Heading;
