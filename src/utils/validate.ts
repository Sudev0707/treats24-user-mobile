type PhoneValidationParams = {
  phone: string;
  country: string;
};

export const validatePhone = ({ phone, country }: PhoneValidationParams) => {
  if (!phone.trim()) {
    return {
      isValid: false,
      error: 'Phone number is required',
    };
  }

  if (!/^\d+$/.test(phone)) {
    return {
      isValid: false,
      error: 'Phone number must contain only numbers',
    };
  }

  // India validation
  if (country === 'IN' && phone.length !== 10) {
    return {
      isValid: false,
      error: 'Enter a valid 10-digit mobile number',
    };
  }

  return {
    isValid: true,
    error: '',
  };
};
