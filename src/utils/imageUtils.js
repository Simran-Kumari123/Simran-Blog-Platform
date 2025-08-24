/**
 * Utility functions for handling image operations
 */

/**
 * Converts a File object to a base64 encoded string
 * @param {File} file - The file to convert
 * @returns {Promise<string>} A promise that resolves with the base64 string
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

/**
 * Checks if a string is a base64 encoded image
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a base64 image
 */
export const isBase64Image = (str) => {
  if (typeof str !== 'string') return false;
  return str.startsWith('data:image/') && str.includes('base64,');
};

/**
 * Gets the appropriate image source based on the image data type
 * @param {File|string|null} image - The image data (File object, base64 string, or file path)
 * @returns {string} The image source URL
 */
export const getImageSource = (image) => {
  if (!image) return '';
  
  if (typeof image === 'string') {
    // Check if it's a base64 string or a file path
    if (isBase64Image(image)) {
      return image;
    } else {
      return image; // Assume it's a file path
    }
  } else if (image instanceof File) {
    return URL.createObjectURL(image);
  }
  
  return '';
};
