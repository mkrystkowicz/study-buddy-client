import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import styled from 'styled-components';
import { NotesWrapper } from 'components/organisms/NotesWidget/NotesWidget';
import Note from 'components/molecules/Note/Note';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
  padding: 30px;
`;

export const FormWrapper = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

const Notes = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="~itle" id="title" />
        <StyledFormField isTextarea label="Content" name="content" id="content" />
        <Button>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        <Note title="title" content="content" />
        <Note title="title" content="content" />
        <Note title="title" content="content" />
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
