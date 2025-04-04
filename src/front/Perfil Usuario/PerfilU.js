document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const editButton = document.getElementById("editProfile");
    const closeButton = document.querySelector(".close");
    const saveButton = document.getElementById("saveProfile");
    const userName = document.getElementById("user-name");
    const userAge = document.getElementById("user-age");
    const userPeriod = document.getElementById("user-period");
    
    editButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });
    
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
    saveButton.addEventListener("click", () => {
        const newName = document.getElementById("editName").value;
        const newAge = document.getElementById("editAge").value;
        const newPeriod = document.getElementById("editPeriod").value;
        
        if (newName) userName.textContent = newName;
        if (newAge) userAge.textContent = `${newAge} anos`;
        if (newPeriod) userPeriod.textContent = newPeriod;
        
        modal.style.display = "none";
    });
});
