export const truncateText = (text: string, limit: number) => {
  const addDots = text.length > limit ? '...' : '.';
  return text?.substring(0, limit) + addDots;
};

export const getCartTotal = () => {};
