async function fetchUserData() {
  const apiURL = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json(); // Added await
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    users.forEach((user) => {
      // Changed from users.array
      const listItem = document.createElement("li"); // Added const
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data";
    console.error("Error:", error); // Helpful for debugging
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
