import { useBoardTypeSelector, useBoardStatusSelector, useIsRunningSelector, useTotalTimeSelector, useCurrentTimeSelector } from 'hooks/selectorHooks';
import { useAppDispatch } from 'hooks/stateHooks';
import './TimePanel.scss';
import { boardTypeChanged, gameStarted } from 'state/slices/gameSlice';
import { Board } from 'utils/types';
import { useTranslation } from 'react-i18next';
import { formatTime } from 'utils/helpers';

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const TimePanel = () => {
    const { t } = useTranslation();
    const time = useCurrentTimeSelector();

    return (
        <section className='rk-time-panel'>
            <div>{t('game.time.current')}</div>
            <h5>{formatTime(time)}</h5>
        </section>
    );
}

export default TimePanel;
