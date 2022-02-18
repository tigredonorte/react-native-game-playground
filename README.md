# React native playground

This repository was created to test my react native hability during a react native course that I'm doing. 

## Running

This repository uses expo. If you download it use yarn to install ```yarn add``` dependencies and 
```npm start``` to run the code locally. Remember to use ```expo install``` if it's something related to expo

## what does this app do?

This app is a guess game. You set a initial number and computer try to discover the selected number
It select a random number until it discover it.

This app has 3 pages: StartGame, Game and GameOver, Also it has reusable components like: card, main-button, text-input
It's a rudimentar design system. But common! I'm just learning.

If you want to do the same course, you can: [Access this course on udemy](https://www.udemy.com/course/react-native-the-practical-guide). I have a <strike>discount coupon named thom</strike> Just kidding, I'm not selling anything lol, but the course is good!

## what I've learned with this repository

- How to create a reusable component using react
- How to create a react application using functions and classes
- How to basically style components
- How to use images, flatList, scrollview, buttons
- How to control component's state using react hook
- How to make a responsive design for diferent kinds of devices

### About responsive design

I used rxjs Behavior subject to update design information (used on each page)
also, I've used and @ngneat/react-rxjs. It has a useObservable hook that make
easy to watch/subscribe/unsubscribe from observables (and avoid memory leak)

On that observable I've saved raw data like width and height, also if screen's
position is portrait or landscape (it makes easier to write responsive layouts)


## what I didn't lear with this repository

- React Routes
- Design libraries like material or react paper

I'll learn it in the next repository!

## How this app looks like?

### small device landscape
![Home](/docs/img/home.png)
![Home2](/docs/img/home2.png)
![Game](/docs/img/game.png)
![Game End](/docs/img/game-end.png)

### small device portrait
![Home](/docs/img/home-portrait.png)
![Home2](/docs/img/home-portrait2.png)
![Game](/docs/img/game-portrait.png)
![Game End](/docs/img/game-end-portrait.png)