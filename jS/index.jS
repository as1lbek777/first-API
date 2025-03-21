'use strict';

const API = "https://jsonplaceholder.typicode.com/users";
const card = document.querySelector('.card');

fetch(API)
    .then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
        card.innerHTML = data.map((user) => {
            return `
                <div class="profile-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s" alt="User Avatar" class="profile-img">
                    <p class="profile-name">Name: ${user.name}</p>
                    <p class="profile-bio">City: ${user.address.city}</p>
                    <p class="profile-bio">Username: ${user.username}</p>
                    <p class="profile-bio">Phone: ${user.phone}</p>
                    <p class="profile-bio">Email: ${user.email}</p>
                    <a class="web" href="${user.website}">Websity: ${user.website}</a>
                    <div class="profile-links">
                        <a class="edit" href="#">Edit</a>
                        <a href="https://github.com/as1lbek777">Following</a>
                    </div>
                </div>
            `
        }).join('');
    })