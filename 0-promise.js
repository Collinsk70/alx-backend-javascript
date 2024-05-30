function API() {}

// Add getResponseFromAPI to the prototype of API
API.prototype.getResponseFromAPI = function() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      const success = true; // Change this to simulate success or failure
      if (success) {
        resolve("API call successful!");
      } else {
        reject("API call failed.");
      }
    }, 1000); // Simulate a delay of 1 second
  });
};
