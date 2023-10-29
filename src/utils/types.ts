/**
 * A type to represent the strings used for player 1 and player 2
 */
export enum Player {
    'O' = 'O',
    'X' = 'X'
}

/**
 * An enum to represent the type of board used
 */
export enum Board {
    Board9 = 9,
    Board36 = 36,
    Board81 = 81
}

export type PlayerState = {
    currentPlayer: Player
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
    boardType: Board;
    boardStatus: {
        [key in Board]: Player[];
    };
    board9Status: string[];
    board36Status: string[];
    board81Status: string[];
    isGameStarted: boolean;
    totalGameTime: number;
    currentGameTime: number;
};