import React, { useState } from 'react';
import styled from 'styled-components';
import Note from 'components/molecules/Note/Note';
import { useGetNotesQuery } from 'store/api/notes';

const Wrapper = styled.div`
  width: 400px;
  height: auto;
  max-height: 700px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -55px;
  border-radius: 8px 8px 0 0;
  top: 40px;
  color: white;
  border: none;
  cursor: pointer;
`;

export const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  overflow-y: scroll;
`;

const NotesWidget = () => {
  const { data, isLoading } = useGetNotesQuery();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <NotesWrapper isOpen={isOpen}>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />)
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
