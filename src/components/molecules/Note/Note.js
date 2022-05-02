import React from 'react';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';

const Note = ({ id, title = 'Untitled', content = 'No content' }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id }));
  };

  return (
    <NoteWrapper>
      <h3>{title}</h3>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
