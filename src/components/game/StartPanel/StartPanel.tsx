import { useBoardTypeSelector, useBoardStatusSelector, useIsRunningSelector } from 'hooks/selectorHooks';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'hooks/stateHooks';
import './StartPanel.scss';
import { boardTypeChanged, gameStarted, gameTimeIncremented, matchReset } from 'state/slices/gameSlice';
import { Board } from 'utils/types';
import { Fragment, useEffect } from 'react';
import { useOverallWinner } from 'hooks/gameHooks';

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const StartPanel = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const isRunning = useIsRunningSelector();
    const overallWinner = useOverallWinner();

    useEffect(() => {

        const timer = setInterval(() => {
            if (isRunning) {
                dispatch(gameTimeIncremented());
            }
        }, 1000);



        return () => clearInterval(timer);
    }, [isRunning]);

    const handleClick = (boardType: Board) => {
        dispatch(boardTypeChanged(boardType));
        dispatch(gameStarted());
    };

    const handleRestartClick = () => {
        dispatch(matchReset());
    };

    let content = null;
    if (!isRunning && !overallWinner) {
        content = (
            <Fragment>
                <button type='button' className='btn btn-primary' onClick={() => handleClick(Board.Board9)}>{t('button.start.9')}</button>
                <button type='button' className='btn btn-primary' onClick={() => handleClick(Board.Board36)}>{t('button.start.36')}</button>
                <button type='button' className='btn btn-primary' onClick={() => handleClick(Board.Board81)}>{t('button.start.81')}</button>
            </Fragment>
        );
    }
    else if (overallWinner) {
        content = <button type='button' className='btn btn-primary' onClick={handleRestartClick}>{t('button.restart')}</button>;
    }

    return (
        <div className='rk-start-panel'>
            {content}
        </div>
    );
}

export default StartPanel;
