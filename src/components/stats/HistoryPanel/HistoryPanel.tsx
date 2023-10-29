import { useTranslation } from 'react-i18next';
import { useWinHistorySelector } from 'hooks/selectorHooks';
import './HistoryPanel.scss';
import { getPlayerClass } from 'utils/helpers';

/**
 * This is the main area of the application displayed beneath the header.
 * When the app loads for the first time, a query request is made to fetch the Person data.
 * As this is an async call, we must accommodate the loading and error states.  
 */
const HistoryPanel = () => {
    const { t } = useTranslation();
    const winHistory = useWinHistorySelector();

    let content = [];
    for (let i = 0; i < 9; i++) {
        let winner = null;
        let playerClass = '';
        if (winHistory[i]) {
            winner = `P${winHistory[i].player}`;
            playerClass = getPlayerClass(winHistory[i].player);
        }
        content.push(<div className={`rk-history-item ${playerClass}`}>{winner}</div>);
    }

    return (
        <div className='rk-history-panel'>
            <div>{t('game.history')}</div>
            <div className='rk-history-items'>
                {content}
            </div>
        </div>
    );
}

export default HistoryPanel;
