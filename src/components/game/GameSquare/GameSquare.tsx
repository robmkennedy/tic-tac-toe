
import { Player } from 'utils/types';
import './GameSquare.scss';
import { MouseEventHandler } from 'react';

type GameSquareProps = {
    player?: Player
    onClick: MouseEventHandler<HTMLDivElement>
};

/**
 * A component used to show the list of people. It uses the common NavList component
 * and provides name, sorting, and filtering functions. It will listen to state changes
 * for the search string and filter the people accordingly.
 */
const GameSquare = ({ player, onClick }: GameSquareProps) => {

    const squareCount = 9;
    const x = Player.O

    const playerClass = (player === Player.O ? 'player-o' : player == Player.X ? 'player-x' : '');

    return (
        <div className='rk-game-square' onClick={onClick}>
            <div className={`rk-game-square-content ${playerClass}`} />
        </div>
    );
}

export default GameSquare;
