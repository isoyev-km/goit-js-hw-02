'use strict'

const checkForSpam = function(message) {
  let isThereSpam =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
      ? true
      : false;
  return isThereSpam;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technologyspam news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true