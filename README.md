# 🐱🐵🐼 The Zoo

## 📜 Description of the assignment

This was an assignment for the course Javascript fördjupning as part of my education (Frontend developer) at Medieinstitutet.

## Setup

We were given an API endpoint which returned a list of animal objects. Our goal was to create a Single Page Application that presents these animals and where you can feed them.

## 🚀 Tech Stack

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)

(I have also used luxon to handle the time and date management but they had no good badge to use)

## Criterias for the grades

### ✔️ Criterias for passing the assignment

[x] Create a SPA with React and Typescript which contains a page where all the animals are presented with their name, their image and a short description. You should be able to click on a animal to see more info about the selected animal.
[x] From the animals individual page you should be able to feed the animal via a button. When this button is clicked it should be made clear that the animal has been fed and the button should be disabled. You also need to display the time stamp of when the animal was fed.
[x] Some of the animals have corrupted URL paths, find a way to replace those images with something

### ➕ Criterias for extra credit

[x] When you refresh the page your application needs to check if it has been more than three hours since the animal was fed and if so reset the feeding and make the feed button active again.
[x] You should present some kind of notification on the homepage that an animal needs to be fed if it has been more than three hours.
