import {Injectable} from '@angular/core';
import {Project} from '@projects/project.model';

@Injectable({providedIn: 'root'})

export class ProjectsService {
  private projects: Project[] = [
    new Project(
      0,
      'Morra Odds and Evens',
['Java'],
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
      1,
      'Java Words Game',
      ['Java'],
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
      2,
      'AAAChat',
      ['Java', 'Android'],
      'AAAChat is a simple chat app interface created using Android Studio and Java. ' +
      'The interface created is similar in style to WhatsApp.',
      [],
      'github.com/ndeely/AAAChat'
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
