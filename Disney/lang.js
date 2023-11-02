
function changeLanguage() {
    var languageSelect = document.getElementById("language");
    var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;
    window.location.href = selectedLanguage;
}
