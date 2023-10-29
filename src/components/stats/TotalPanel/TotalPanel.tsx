import { useTranslation } from 'react-i18next';
import { useTotalTimeSelector } from 'hooks/selectorHooks';
import './TotalPanel.scss';
import { formatTime } from 'utils/helpers';

/**
 * This is the main area of the application displayed beneath the header.
 * When the app loads for the first time, a query request is made to fetch the Person data.
 * As this is an async call, we must accommodate the loading and error states.  
 */
const TotalPanel = () => {
    const { t } = useTranslation();
    const time = useTotalTimeSelector();

    return (
        <section className='rk-total-panel'>
            <div>{t('game.time.total')}</div>
            <h5>{formatTime(time)}</h5>
        </section>
    );
}

export default TotalPanel;
