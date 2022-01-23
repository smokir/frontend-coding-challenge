import React from 'react';

import Button from 'components/Button';
import { Title, Wrapper } from './styled';

interface ErrorProps {
  title?: string;
  onRetry: () => void;
}

const Error = ({ title = 'Something went wrong', onRetry }: ErrorProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <Button onClick={onRetry}>retry</Button>
  </Wrapper>
);

export default Error;
