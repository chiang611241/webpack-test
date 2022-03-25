import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px;
  border: 1px solid #cccc;
  border-radius: 10px;
`;

const Title = styled.div`
  padding: 5px 0px;
`;

const AddButton = styled.button`
  margin-left: 10px;
`;

interface ICardProps {
  title: string;
  value: string | number;
  onChange: (e: any) => void;
}

const Card = (props: ICardProps) => {
  const { title, value, onChange } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <span>{value}</span>
      <AddButton onClick={onChange} type='button'>
        +1
      </AddButton>
    </Container>
  );
};

export default Card;
