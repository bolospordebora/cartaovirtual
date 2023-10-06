const linksSocialMedia = {
    instagram: 'alnerve_',
    whatsapp: 'alfredo.souza.1884',
}

// function changeSocialMediaLink() {
//     for (let li of socialLinks.children) {
//         const social = li.getAttribute('class')

//         li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
//     }
// }

// changeSocialMediaLink()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name        //.textContent == substitui tudo
        userBio.textContent = data.bio
        userLink.href = data.html_url           //.href == muda só o link
        userImage.src = data.avatar_url         //.src == muda a foto
        userLogin.textContent = data.login
    })

}

// getGitHubProfileInfos()
