import HistoryPanel from '../HistoryPanel/HistoryPanel';
import PercentagePanel from '../PercentagePanel/PercentagePanel';
import TotalPanel from '../TotalPanel/TotalPanel';
import './StatsScreen.scss';

/**
 * This is the main area of the application displayed beneath the header.
 * When the app loads for the first time, a query request is made to fetch the Person data.
 * As this is an async call, we must accommodate the loading and error states.  
 */
const StatsScreen = () => {


    return (
        <section className='rk-stats-screen'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <PercentagePanel/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <HistoryPanel />
                    </div>
                </div>
                <TotalPanel />
            </div>
        </section>
    );
}

export default StatsScreen;
