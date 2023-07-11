const socialMediaLinks = document.querySelectorAll('a')
let links = []

for (let i = 0; i < socialMediaLinks.length; i++) {
    links.push(socialMediaLinks[i].href)
}

for (let i = 0; i < links.length; i++) {
    console.log(links[i]); 
}