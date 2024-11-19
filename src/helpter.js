export const addCartItems = (item) => {
  // Safely parse localStorage data or initialize as an empty array
  const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new item to the array
  storedCartItem.push(item);

  // Save the updated array back to localStorage
  localStorage.setItem("cart", JSON.stringify(storedCartItem));
};

export const addWishedItems = (item) => {
  // Safely parse localStorage data or initialize as an empty array
  const storedWishedItem =
    JSON.parse(localStorage.getItem("wish")) || [];

  // Add the new item to the array
  storedWishedItem.push(item);

  // Save the updated array back to localStorage
  localStorage.setItem("wish", JSON.stringify(storedWishedItem));
};
