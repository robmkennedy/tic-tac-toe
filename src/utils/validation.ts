import { Board, Player } from "./types";

/**
 * An array of arrays. Each internal array represents a possible win state on the board 9.
 */
export const board9Wins = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0]
];

export const board9WinTests = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const boardWins = {
    [Board.Board9]: board9WinTests,
    [Board.Board36]: board9Wins,
    [Board.Board81]: board9Wins
};

const checkWinTest = (boardStatus: string[], winTest: number[]) => {

    let firstPlayerFound = boardStatus[winTest[0]];
    if (!firstPlayerFound) {
        return undefined;
    }
    for (let i = 1; i < winTest.length; i++) {
        let nextPlayerFound = boardStatus[winTest[i]];
        if (nextPlayerFound !== firstPlayerFound) {
            return undefined;
        }
    }
    return firstPlayerFound as Player;
}


export const isWinner = (boardType: Board, boardStatus: string[]) => {
    const winTests = boardWins[boardType];
    let winningTest = undefined;
    let winningPlayer = undefined;
    for (let winTest of winTests) {
        winningPlayer = checkWinTest(boardStatus, winTest);
        if (winningPlayer) {
            winningTest = winTest;
            break;
        }
    }
    return [winningPlayer, winningTest];
};


/**
 * A type to represent the details for a person.
 */
export type Person = {
    name: string;
    image: string;
    email: string,
    company: string,
    phone: string,
    education: Education[],
    experience: Experience[]
};

/**
 * A type to represent the a single education detail for a person.
 */
export type Education = {
    institution: string,
    startYear: string,
    endYear: string,
    degree: string
};

/**
 * A type to represent the a single experience for a person.
 */
export type Experience = {
    institution: string,
    startYear: string,
    endYear: string,
    title: string
};

/**
 * Represents the state stored in redux for general parts of the app.
 * For a simple app like this, a single state slice can be used for both the selected
 * person and the search string. The selected person is optional as there may not be a 
 * person selected from the list.
 */
export type AppState = {
    searchString: string,
    selectedPerson?: Person
};