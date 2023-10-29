import { useAppSelector } from 'hooks/stateHooks';
import { Board, Player, Win } from 'utils/types';
import { useBoardStatusSelector, useBoardTypeSelector, useWinHistorySelector } from './selectorHooks';
import { isWinner } from 'utils/validation';

/** 
 * Select the selected item from the app state slice
 */
export const useCheckWinner = (): Win | undefined => {

    const boardType = useBoardTypeSelector();
    const boardStatus = useBoardStatusSelector(boardType);

    return isWinner(boardType, boardStatus);
};

export const useOverallWinner = (): Player | undefined => {
    const winHistory = useWinHistorySelector();

    const results = { [Player.O]: 0, [Player.X]: 0 }
    winHistory.forEach((win) => {
        results[win.player] = results[win.player] + 1;
    });

    return (results[Player.O] > 4 ? Player.O : results[Player.X] > 4 ? Player.X : undefined);
};

