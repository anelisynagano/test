const textureBackground = document.getElementsByTagName('body')[0];
const textureSelection = document.getElementById("texture-selector");
const profile = document.getElementById("profile");
const profileContent = document.getElementById("profile-content");

textureSelection.addEventListener('change', () => {
    textureBackground.style.backgroundImage = "url(" + event.target.value + ")"
/*     `url(${event.target.value})`
 */})

profileContent.style.display = 'none';

/* profile.addEventListener('click', () => {
    if (profileContent.style.display === 'none') {
        profileContent.style.display = 'block'
    } else {
        profileContent.style.display = 'none'
    }
}) */

profile.addEventListener('click', () => {
    profileContent.style.display === 'none' ? profileContent.style.display = 'block' : profileContent.style.display ='none'
})