import { useCurrentPlayerSelector, useCurrentWinSelector, useIsRunningSelector } from 'hooks/selectorHooks';
import './PlayerTitle.scss';
import { Player } from 'utils/types';
import { useTranslation } from 'react-i18next';
import { getPlayerClass } from 'utils/helpers';
import { useOverallWinner } from 'hooks/gameHooks';


type PlayerTitleProps = {
    player: Player
}

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const PlayerTitle = ({ player }: PlayerTitleProps) => {
    const { t } = useTranslation();
    const isRunning = useIsRunningSelector();
    const currentWin = useCurrentWinSelector();
    const overallWinner = useOverallWinner();
    const currentPlayer = useCurrentPlayerSelector();

    let info = null;
    if (!overallWinner) {
        if (currentWin) {
            if (!isRunning && player === currentWin.player) {
                info = <h3 className='rk-player-won'>{t('you.won')}</h3>;
            }
        }
        else if (isRunning && player === currentPlayer) {
            info = <h3>{t('your.turn')}</h3>;
        }
    }

    const playerClass = getPlayerClass(player);
    const playerName: string = `player.${player}`.toLowerCase();

    return (
        <div className={`rk-player-title ${playerClass}`}>
            <h3>{t(playerName)}</h3>
            {info}
        </div>
    );
}

export default PlayerTitle;
