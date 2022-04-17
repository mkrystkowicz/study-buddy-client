import { useReducer } from 'react';

const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CONSENT_TOGGLE: 'CONSENT_TOGGLE',
  THROW_ERROR: 'THROW_ERROR',
  CLEAR_VALUES: 'CLEAR_VALUES',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.CONSENT_TOGGLE:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.THROW_ERROR:
      return {
        ...state,
        error: action.errorValue,
      };
    case actionTypes.CLEAR_VALUES:
      return action.intitialValues;
    default:
      return state;
  }
};

export const useForm = (intitialValues) => {
  const [formValues, dispatch] = useReducer(reducer, intitialValues);

  const handleInputChange = (e) => {
    dispatch({ type: 'INPUT_CHANGE', field: e.target.name, value: e.target.value });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.CLEAR_VALUES, intitialValues });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.THROW_ERROR, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.CONSENT_TOGGLE });
  };

  return { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent };
};
