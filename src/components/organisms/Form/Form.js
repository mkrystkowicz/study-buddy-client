import React from 'react';
import { Wrapper, StyledTitle } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const UsersList = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <Wrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label="Name" id="name" name="name" onChange={handleInputChange} value={formValues.name} />
      <FormField label="Attendance" id="attendance" name="attendance" onChange={handleInputChange} value={formValues.attendance} />
      <FormField label="Average" id="average" name="average" onChange={handleInputChange} value={formValues.average} />
      <Button type="submit">Add</Button>
    </Wrapper>
  );
};

export default UsersList;
