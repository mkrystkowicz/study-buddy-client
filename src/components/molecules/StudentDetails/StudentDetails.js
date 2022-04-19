import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';

const StudentDetails = ({ student: { name, group, attendance, average } }) => {
  return (
    <div>
      <Title>
        {name} | Group {group}
      </Title>
      <p>{attendance}</p>
      <StyledAverage value={average}>{average}</StyledAverage>
    </div>
  );
};

export default StudentDetails;
