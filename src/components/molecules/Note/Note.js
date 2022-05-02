import React from 'react';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

const Note = ({ title, content }) => {
  return (
    <NoteWrapper>
      <h3>{title}</h3>
      <p>{content}</p>
      <StyledDeleteButton />
    </NoteWrapper>
  );
};

export default Note;
