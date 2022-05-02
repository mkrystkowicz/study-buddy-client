import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import styled from 'styled-components';
import { NotesWrapper } from 'components/organisms/NotesWidget/NotesWidget';
import Note from 'components/molecules/Note/Note';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'store';

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
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ title: 'New note', content: 'New content' }));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="~itle" id="title" />
        <StyledFormField isTextarea label="Content" name="content" id="content" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
