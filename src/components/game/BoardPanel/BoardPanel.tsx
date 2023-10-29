import GameBoard from '../GameBoard/GameBoard';
import './BoardPanel.scss';

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const BoardPanel = () => {

    return (
        <div className='rk-board-panel'>
            <GameBoard />
        </div>
    );
}

export default BoardPanel;
