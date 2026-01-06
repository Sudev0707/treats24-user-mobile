const fonts = {
  // Families – update these when you add custom fonts
  family: {
    // regular: 'Inter-Regular',
    // medium: 'Inter-Medium',
    // semibold: 'Inter-SemiBold',
    // bold: 'Inter-Bold',
    //
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semibold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },

  // Sizes
  size: {
    xs: 10,
    sm: 12, 
    md: 14, 
    lg: 16, 
    xl: 18, 
    '2xl': 22, 
    '3xl': 26, 
  },

  // Weights
  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '800' as const,
  },
};

export default fonts;
