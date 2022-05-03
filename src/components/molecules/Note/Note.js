import React, { useEffect } from 'react';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { useRemoveNoteMutation } from 'store';

const Note = ({ id, title = 'Untitled', content = 'No content' }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote(id);
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
