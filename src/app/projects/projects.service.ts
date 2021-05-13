import {Injectable} from '@angular/core';
import {Project} from '@projects/project.model';

@Injectable({providedIn: 'root'})

export class ProjectsService {
  private projects: Project[] = [
    new Project(
      0,
      'Java DIY Games',
      ['Java', 'JFrame'],
      'This repository contains a number of Java JFrame games I have created as a learning experience.<br><br>' +
      'The notable inclusions are:<br>' +
      '<h4>Watch Your Step</h4>' +
      '<p>Watch Your Step is a Minesweeper clone which allows you to try to expose all of the squares without ' +
      'falling into a hole. Suspected holes can be marked with a skull and crossbones.</p>' +
      '<h4>Framed</h4>' +
      '<p>Framed is a simple game where you must turn on all of the lights in a 3x3 grid to win. However, switching ' +
      'a light will also affect the lights directly above, below, or to the side of the light that was switched.</p>' +
      '<h4>Maze Generator</h4>' +
      '<p>Maze generator build a maze that you can navigate the green ball through to get to the finish line (red ball). ' +
      'Movement controls are shown prior to the first play.</p>' +
      '<h5>Movement</h5>' +
      '<p>Up: "W" or Up Arrow Key<br>Down: "S" or Down Arrow Key<br>Left: "A" or Left Arrow Key<br>Right: "D" or Right Arrow Key<br></p>'
      ,
      [
        '/assets/images/DIYGames/WatchYourStep.png',
        '/assets/images/DIYGames/MazeGenerator.png',
        '/assets/images/DIYGames/Framed.png',
        '/assets/images/DIYGames/SlidingTiles.png',
        '/assets/images/DIYGames/GuessMyColor.png',
        '/assets/images/DIYGames/ZilchDiceGame.png'
      ],
      'github.com/ndeely/DIYGames'
    ),
    new Project(
      1,
      'Morra Odds and Evens',
['Java', 'Command Line'],
'<h3>“Morra Odds and Evens” game rules</h3>' +
  '<ol>' +
  '<li>Two-player game. One player is team Odds and the other is team Evens.</li>' +
  '<li>In each round of the game, the players will simultaneously hold out between 1 and 10 ﬁngers.</li>' +
  '<li>The winner of the round is decided based on the sum of ﬁngers shown by both players. Namely, ' +
  'if the sum is an even number then the “Evens” player wins, otherwise if the sum is an odd number then the “Odds” player wins.</li>' +
  '<li>The winner of the round receive 3 points.</li>' +
  '<li>In addition, the player whose number of fingers is closer to the sum receives 2 bonus points.</li>' +
  '<li>The winner of the game is the ﬁrst player to accumulate 12 or more points.</li>' +
  '</ol>',
    [],
      'github.com/ndeely/MorraProject'
    ),
    new Project(
      2,
      'AAAChat',
      ['Java', 'Android'],
      'AAAChat is a simple chat app interface created using Android Studio and Java. ' +
      'The interface created is similar in style to WhatsApp.',
      [],
      'github.com/ndeely/AAAChat'
    ),
    new Project(
      3,
      'Java Words Game',
      ['Java', 'Command Line'],
      '<h3>“Java Words Game” game rules:</h3>' +
      '<ol>' +
      '<li>The game is played between two players, both human users.</li>' +
      '<li>Each player begin the game with the same number of lives and with 0 for each one.</li>' +
      '<li>First turn starts with a random letter and a random player, which has to play that letter; in our case, ' +
      'the computer makes the selection.</li>' +
      '<li>First stage of the game consists in that the randomly selected player has to write down in the program, a ' +
      'word that start with the randomly selected letter, at the beginning at the game.</li>' +
      '<li>The next player has to also input a word, but this time starting with the with the last two letters of ' +
      'the last word provided by the other player.</li>' +
      '<li>All the words has to be formed from at least 3 letters, and to be correctly wrote in English language, ' +
      'as it will be passed through specific input validation.</li>' +
      '<li>The game contains a limited 1024 English word which will be the base of the words used in the game.</li>' +
      '<li>Flowingly, each player will had to add a new word starting with the last two letter from the last word ' +
      'player by the last player.</li>' +
      '<li>If any player doesn´t know any word starting with a determinate sequence of two letters , ' +
      'then that player will lose a live, and the game will start from the beginning.</li>' +
      '<li>Each time when a correct word will be played, by input by any player, that player will receive a ' +
      'concrete number of points, described in a specific rule.</li>' +
      '<li>The main objective of the game is not to lose the lives that one has, and therefor introduce as many ' +
      'words as possible. If this rule is not followed the player who firstly waste his lives, will lose the ' +
      'game and the one with lives remaining will win the game.</li>' +
      '<li>At the end of the game the players will see a summary with their remaining lives and total gathered ' +
      'points along the game.</li></ol>',
      [],
      'github.com/ndeely/JavaWordsGame'
    ),
    new Project(
      4,
      'Project Euler Solutions',
      ['Java', 'Command Line'],
      '<blockquote><p><a href="https://projecteuler.net/" target="_blank">Project Euler</a> is a series of challenging ' +
      'mathematical/computer programming problems that will require more than just mathematical insights to ' +
      'solve.</p></blockquote>' +
      '<p>I have used this website to practice my coding and problem solving skills. I have recently decided to put my ' +
      'solutions to the problems provided into a GitHub repository, which is provided below. While many programming ' +
      'languages can be used to solve these problems, I have used Java for my solutions as it is the language I would ' +
      'be most familiar with.</p>' +
      '<p>I will not include solutions to the problems #100+, as the creators of the project do not wish to have solutions to ' +
      'the more complicated problems shared.</p>',
      [],
      'github.com/ndeely/Project-Euler'
    )
  ];

  constructor() {
  }

  getProjects() {
    return this.projects.slice();
  }

  getProject(id: number) {
    return this.projects[id];
  }

  getCategory(tag: string) {
    return this.projects.filter((p) => p.tags.indexOf(tag) !== -1);
  }
}
