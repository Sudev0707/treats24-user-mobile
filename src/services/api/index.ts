const API_BASE_URL = 'http://localhost:8080/api'; // Adjust as needed

export const sendEmailOTP = async (email: string) => {
  const response = await fetch(`${API_BASE_URL}/otp/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ email }),
  });

  if (!response.ok) {
    throw new Error('Failed to send email OTP');
  }

  return response.json();
};

export const verifyEmailOTP = async (email: string, otp: string) => {
  const response = await fetch(`${API_BASE_URL}/otp/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ email, otp }),
  });

  if (!response.ok) {
    throw new Error('Failed to verify email OTP');
  }

  return response.json();
};
