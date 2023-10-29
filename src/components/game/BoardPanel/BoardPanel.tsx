import { useOverallWinner } from 'hooks/gameHooks';
import GameBoard from '../GameBoard/GameBoard';
import './BoardPanel.scss';
import { useTranslation } from 'react-i18next';


/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const BoardPanel = () => {
    const overallWinner = useOverallWinner();
    const { t } = useTranslation();

    let content = null;

    if (overallWinner) {
        content = (
            <div className='rk-match-success'>
                <h3>{t('game.overall.success', { player: `${overallWinner}` })}</h3>
            </div>
        );
    }
    else {
        content = <GameBoard />
    }

    return (
        <div className='rk-board-panel'>
            {content}
        </div>
    );
}

export default BoardPanel;
