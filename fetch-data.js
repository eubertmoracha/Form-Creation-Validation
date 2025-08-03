async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear initial loading message
    dataContainer.innerHTML = "";

    // Create and populate user list
    const userList = document.createElement("ul");

    users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

// Run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
