import React from 'react';

import Button from 'components/Button';
import { Actions, Title, Wrapper } from './styled';

interface CardProps {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

const Card = ({
  title,
  children,
  onEdit,
  onDelete
}: React.PropsWithChildren<CardProps>) => (
  <Wrapper>
    <Title title={title}>{title}</Title>

    <div>{children}</div>

    <Actions>
      <Button onClick={onEdit}>edit</Button>

      <Button onClick={onDelete}>delete</Button>
    </Actions>
  </Wrapper>
);

export default Card;
