export type InputType = 'text' | 'number' | 'email' | 'password';

interface ValidationResult {
    value: boolean;
    error?: string;
}

export const validateInput = (
    value: string,
    type: InputType
): ValidationResult => {
    switch (type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) {
                return { value: false, error: 'Email is required' };
            }
            if (!emailRegex.test(value)) {
                return { value: false, error: 'Invalid email format' };
            }
            return { value: true };

        case 'password':
            if (!value) {
                return { value: false, error: 'Password is required' };
            }
            if (value.length < 6) {
                return { value: false, error: 'Password must be at least 6 characters' };
            }
            return { value: true };

        case 'number':
            if (!value.trim()) {
                return { value: false, error: 'Number is required' };
            }
            if (isNaN(Number(value))) {
                return { value: false, error: 'Must be a valid number' };
            }
            return { value: true };

        case 'text':
        default:
            if (!value.trim()) {
                return { value: false, error: 'This field is required' };
            }
            return { value: true };
    }
};
