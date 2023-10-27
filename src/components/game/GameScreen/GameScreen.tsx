import BoardPanel from '../BoardPanel/BoardPanel';
import TimePanel from '../TimePanel/TimePanel';
import PlayerTitle from '../PlayerTitle/PlayerTitle';
import './GameScreen.scss';


/**
 * A component used to show the list of people. It uses the common NavList component
 * and provides name, sorting, and filtering functions. It will listen to state changes
 * for the search string and filter the people accordingly.
 */
const GameScreen = () => {

    return (
        <section className='rk-game-screen'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 order-lg-1'>
                        <BoardPanel />
                    </div>
                    <div className='col-6 col-lg-3 order-lg-0'>
                        <PlayerTitle title={'player 1'} isTurn={true} winCount={4} colorClass='rk-color-1' />
                    </div>

                    <div className='col-6  col-lg-3 order-lg-2'>
                        <PlayerTitle title={'player 2'} isTurn={true} winCount={4} colorClass='rk-color-1' />
                    </div>
                </div>
                <TimePanel />
            </div>
        </section>
    );
}

export default GameScreen;

