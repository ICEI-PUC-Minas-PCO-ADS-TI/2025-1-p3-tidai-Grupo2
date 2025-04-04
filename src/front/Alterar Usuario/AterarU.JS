document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.getElementById("profileImage");
    const imageInput = document.getElementById("imageInput");
    const changeImageButton = document.getElementById("changeImage");
    const saveChangesButton = document.getElementById("saveChanges");
    
    changeImageButton.addEventListener("click", () => {
        imageInput.click();
    });
    
    imageInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    saveChangesButton.addEventListener("click", () => {
        const newName = document.getElementById("newName").value;
        const course = document.getElementById("course").value;
        const startDate = document.getElementById("startDate").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        
        if (newPassword && newPassword !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        
        alert("Alterações salvas com sucesso!\nNome: " + newName + "\nCurso: " + course + "\nData de Início: " + startDate);
    });
});