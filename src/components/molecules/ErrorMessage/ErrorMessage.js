import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from './ErrorMessage.styles';

const defaultMessage = 'Something went wrong. Please try again, or contact our support';

const ErrorMessage = ({ message = defaultMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
