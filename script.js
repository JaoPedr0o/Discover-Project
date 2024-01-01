function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    let avatarImg = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        avatarImg.setAttribute("src", "./assets/avatar-light.png")
        avatarImg.setAttribute("alt", "Esta no modo light")
    } else {
        avatarImg.setAttribute("src", "./assets/avatar.png")
        avatarImg.setAttribute("alt", "Esta no modo dark")
    }
}
