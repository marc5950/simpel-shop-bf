/**
 * Beregn pris med discount (kun hvis discount > 10%)
 * @param {number} price - Original pris
 * @param {number} discountPercentage - Discount i procent
 * @returns {number} Pris efter discount
 */
export const calculatePrice = (price, discountPercentage) => {
  return discountPercentage > 10
    ? price * (1 - discountPercentage / 100)
    : price;
};

/**
 * Tjek om produkt har discount (over 10%)
 * @param {number} discountPercentage - Discount i procent
 * @returns {boolean} True hvis discount > 10%
 */
export const hasDiscount = (discountPercentage) => {
  return discountPercentage > 10;
};

/**
 * Beregn subtotal (før discount)
 * @param {Array} cart - Array af cart items
 * @returns {number} Subtotal
 */
export const calculateSubtotal = (cart) => {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
};

/**
 * Beregn total (efter discount)
 * @param {Array} cart - Array af cart items
 * @returns {number} Total efter discount
 */
export const calculateTotal = (cart) => {
  return cart.reduce((sum, item) => {
    const price = calculatePrice(item.price, item.discountPercentage);
    return sum + price * item.quantity;
  }, 0);
};

/**
 * Beregn leveringsomkostninger
 * @param {number} subtotal - Subtotal før levering
 * @param {number} freeShippingThreshold - Tjek for gratis levering
 * @param {number} shippingCost - Leveringsomkostninger
 * @returns {{shipping: number, shippingCost: number}} Objekt med shipping (faktisk pris) og shippingCost (standardpris)
 */
export const calculateShipping = (
  subtotal,
  freeShippingThreshold = 50,
  shippingCost = 20,
) => {
  return {
    shipping: subtotal >= freeShippingThreshold ? 0 : shippingCost,
    shippingCost: shippingCost,
  };
};

/**
 * Beregn besparelse (subtotal - total)
 * @param {number} subtotal - Subtotal før discount
 * @param {number} total - Total efter discount
 * @returns {number} Besparelse
 */
export const calculateSavings = (subtotal, total) => {
  return subtotal - total;
};
