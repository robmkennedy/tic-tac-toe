import { useCurrentPlayerSelector } from 'hooks/selectorHooks';
import './PlayerTitle.scss';
import { Player } from 'utils/types';

type PlayerTitleProps = {
    title: string,
    player: Player,
    colorClass: string,
}

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const PlayerTitle = ({title, player, colorClass}: PlayerTitleProps) => {

    const currentPlayer = useCurrentPlayerSelector();

    let myTurn = null;
    if (player === currentPlayer) {
        myTurn = 'MY TURN';
    }

    return (
        <div className='rk-player-title'>
            <div>{title}</div>
            <div>{myTurn}</div>
        </div>
    );
}

export default PlayerTitle;
