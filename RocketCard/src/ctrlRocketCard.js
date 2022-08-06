const colors = [
    '#8AB0AB',
    '#3e505b',
    '#26413c',
    '#1a1d1a',
    '#03120e',
];

const API_GITHUB_USER = 'https://api.github.com/users/Matheus-Pontes';

const $ = (element) => document.querySelector(element);

const changeBorderColorCard = () => {
    let randomColor = Math.floor(Math.random() * (colors.length - 0 + 1)) + 0;
    $("#card").style.borderColor = colors[randomColor];
}

$("#btnChangeColor").addEventListener('click', changeBorderColorCard);

const buildDataToScreen = (dataUserGithub) => {
    $('#userNameGithub').innerHTML = dataUserGithub.login;
    $('#perfilGithub').src = dataUserGithub.avatar_url;

    $('#detailsList').innerHTML = `
        <li>    
            <img src="../assets/followers.svg" alt="">
            <span>${dataUserGithub.followers} Seguidores</span>
        </li>
        <li>
            <img src="../assets/following.svg" alt="">
            <span>${dataUserGithub.following} Seguindo</span>
        </li>
        <li>
            <img src="../assets/repository.svg" alt="">
            <span>${dataUserGithub.public_repos} repostitórios</span>
        </li>
        <li>
            <img src="../assets/company.svg" alt="">
            <span>${dataUserGithub.company}</span>
        </li>
        <li>
            <img src="../assets/location.svg" alt="">
            <span>${dataUserGithub.location}</span>
        </li>
    `;
}

async function getDataUserGithub(API) {
    const dataUserGithub = await fetch(API).then(res => res.json());
    
    buildDataToScreen(dataUserGithub);
}

getDataUserGithub(API_GITHUB_USER);
