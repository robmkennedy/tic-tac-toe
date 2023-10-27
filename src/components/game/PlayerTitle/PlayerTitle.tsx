import './PlayerTitle.scss';

type PlayerTitleProps = {
    title: string,
    isTurn: boolean
    winCount: number,
    colorClass: string,
}

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const PlayerTitle = ({title, isTurn, winCount, colorClass}: PlayerTitleProps) => {

    return (
        <div className='rk-player-title'>
            <div>{title}</div>
            <div>{winCount}</div>
        </div>
    );
}

export default PlayerTitle;
