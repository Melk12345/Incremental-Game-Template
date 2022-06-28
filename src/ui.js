const settingsMenuContainerElement = document.getElementById("settings-container");

// let activeMenu = firstMenuContainerElement;

settingsMenuContainerElement.style.display = "none";

const settingsMenuButtonElement = document.getElementById("settings-menu-button");

// let activeMenuButton = firstMenuContainerElement;

settingsMenuButtonElement.style.borderColor = 'Black'; // Orange for first menu button, Black for rest

function openMenu(clickedMenu, clickedMenuButton) {
    activeMenu.style.display = "none";
    activeMenuButton.style.borderColor = 'Black';
    activeMenu = clickedMenu;
    activeMenuButton = clickedMenuButton;
    activeMenuButton.style.borderColor = 'Orange';
    activeMenu.style.display = "block";
}