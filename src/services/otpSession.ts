let confirmationResult: any = null;

export const setConfirmation = (confirmation: any) => {
  confirmationResult = confirmation;
};

export const getConfirmation = () => {
  return confirmationResult;
};

export const clearConfirmation = () => {
  confirmationResult = null;
};
