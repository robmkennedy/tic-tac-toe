import { useWinHistorySelector } from 'hooks/selectorHooks';
import { useTranslation } from 'react-i18next';
import './PercentagePanel.scss';
import { Player } from 'utils/types';

/**
 * This is the main area of the application displayed beneath the header.
 * When the app loads for the first time, a query request is made to fetch the Person data.
 * As this is an async call, we must accommodate the loading and error states.  
 */
const PercentagePanel = () => {
    const { t } = useTranslation();
    const winHistory = useWinHistorySelector();

    const results = { [Player.O]: 0, [Player.X]: 0 }
    winHistory.forEach((win) => {
        results[win.player] = results[win.player] + 1;
    });

    let playerOPercent = 0;
    let playerXPercent = 0;

    if (winHistory.length > 0) {
        playerOPercent = Math.floor(results[Player.O] / winHistory.length * 100);
        playerXPercent = Math.floor(results[Player.X] / winHistory.length * 100);
    }

    const style = { background: `linear-gradient(to right, blue ${playerOPercent}%, green ${playerOPercent}%)` };

    return (
        <div className='rk-percentage-panel'>
            <div>{t('game.percentage')}</div>
            <div className='rk-percentage-bar' style={style} />
            <div className='rk-percentage-labels'>
                <div>{`${playerOPercent}%`} {t('player.o')}</div>
                <div>{`${playerXPercent}%`} {t('player.x')}</div>
            </div>
        </div>
    );
}

export default PercentagePanel;
