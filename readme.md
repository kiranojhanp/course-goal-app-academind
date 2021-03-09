# Guess a Number
## A React Native learning project

*Guess a Number* is a mini-project, proposed in Academind's React Native course. It consists of a mobile app that receives a user number input. Then, the computer will try to guess which number that was, based on the user's hint. It is another take on typical Guess a Number apps.

## Screenshots
<p align="center">
  <img src="https://github.com/yogmel/rn-guess-a-number/blob/master/readme-img/01.png" alt="Screenshot of the first screen. It shows the name of the app, then a box to insert a number. Two buttons, one to reset and clean the input and the other to confirm your choice"width="250">
</p>

Screenshot of the first screen. The two buttons, one it is used to reset and clean the input and the other to confirm your choice. It accepts only positive, not decimal numbers.

<p align="center">
 <img src="https://github.com/yogmel/rn-guess-a-number/blob/master/readme-img/03.png" alt="Screenshot when confirm is pressed. Another box appears underneath, showing the selected number and a button named 'Start Game'"width="250">
</p>

After confirming, the number of your choice will appear below. The game does not start until you press the *Start Game* button.

<p align="center">
 <img src="https://github.com/yogmel/rn-guess-a-number/blob/master/readme-img/04.png" alt="Screenshot of the game. There is a text 'Opponent's Guess' and a number 46 underneath it. There is a box with two buttons, one with a minus and another with a plus sign. Underneath, there is a list of numbers, one column represents the number of the trial and the other, the guessed number"width="250">
</p>

The screen of the game per se. The user's job now is to inform the computer if the number she chose is greater of lower then the one appearing on the screen, under the "Opponent's Guess". Yes, you are the one giving the hints, so the **computer** can get the user's guess right.

A list of guessed numbers is fed underneath.

<p align="center">
 <img src="https://github.com/yogmel/rn-guess-a-number/blob/master/readme-img/05.png" alt="Screenshot when the game is done. A picture of a sleeping cat is shown and the text 'Your phone needed 7 rounds to guess the number 25' appears. There is also a button that reads 'New Game'"width="250">
</p>

If the computer guessed the number right, the game is over. On this screen, it is shown how many guesses the computer needed to get the number right.

## Install and Use
In order to install, clone this repository and run:
```javascript
npm install
// OR
yarn install
```

This was made with [Expo](https://expo.io/), so you need it to run. To do it, run:
```javascript
expo start
// OR if you have it locally
npx expo start
```

This starts the *Metro Bundler*. You can simulate the app in an Android emulator (such as in [Android Studio](https://developer.android.com/studio)) or in your own device, Android or iOS powered, by downloading the [Expo App](https://expo.io/tools#client).