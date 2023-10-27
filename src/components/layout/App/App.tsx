import { Provider } from 'react-redux';
import store from 'state/store';
import GameScreen from 'components/game/GameScreen/GameScreen';
import StatsScreen from 'components/stats/StatsScreen/StatsScreen';
import './App.scss';

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const App = () => {

    return (
        <Provider store={store}>
            <div id='app'>
                <GameScreen />
                <StatsScreen />
            </div>
        </Provider>
    );
}

export default App;
