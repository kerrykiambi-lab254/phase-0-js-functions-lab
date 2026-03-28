// index.js

// Calculate tax: tests call calculateTax(amount) and expect 10% of amount
function calculateTax(amount) {
  const taxRate = 0.10; // fixed 10% tax
  return amount * taxRate;
}

// Convert string to uppercase
function convertToUpperCase(str) {
  return str.toUpperCase();
}

// Find maximum of two numbers (tests only pass two arguments)
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Check if a string is a palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Calculate discounted price: tests call calculateDiscountedPrice(originalPrice, discountPercentage)
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // discountPercentage is given as a whole number (e.g., 20 for 20%)
  const discountRate = discountPercentage / 100;
  const discountedPrice = originalPrice * (1 - discountRate);
  return discountedPrice;
}

// Export all functions
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};

