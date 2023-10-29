
import { Player } from 'utils/types';
import './GameBoard.scss';
import GameSquare from '../GameSquare/GameSquare';
import { useBoardStatusSelector, useBoardTypeSelector, useCurrentPlayerSelector } from 'hooks/selectorHooks';
import { useAppDispatch } from 'hooks/stateHooks';
import { boardStatusChanged } from 'state/slices/appSlice';
import { currentPlayerChanged } from 'state/slices/playerSlice';
import { isWinner } from 'utils/validation';
import { useCheckWinner } from 'hooks/gameHooks';


/**
 * A component used to show the list of people. It uses the common NavList component
 * and provides name, sorting, and filtering functions. It will listen to state changes
 * for the search string and filter the people accordingly.
 */
const GameBoard = () => {

    const dispatch = useAppDispatch();
    const boardType = useBoardTypeSelector();
    const boardStatus = useBoardStatusSelector(boardType);
    const currentPlayer = useCurrentPlayerSelector();
    const winner = useCheckWinner();



    const handleSquareClick = (squareIndex: number) => {
        const existingSquareStatus = boardStatus[squareIndex];
        if (existingSquareStatus) {
            return;
        }
        const nextPlayer = (currentPlayer === Player.O ? Player.X : Player.O);
        dispatch(boardStatusChanged({ boardType, squareIndex, currentPlayer }));
        dispatch(currentPlayerChanged(nextPlayer));
    };

    let squares = boardStatus.map((status, index) => {
        return <GameSquare player={status} onClick={() => handleSquareClick(index)} />;
    });

    return (
        <section className='rk-game-board'>
            {squares}
        </section>
    );
}

export default GameBoard;

