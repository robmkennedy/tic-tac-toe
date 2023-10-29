import { useAppSelector } from 'hooks/stateHooks';
import { Board } from 'utils/types';

/** 
 * Select the selected item from the app state slice
 */
export const useBoardTypeSelector = () => {
    return useAppSelector((state) => state.game.boardType);
};

/** 
 * Select the selected item from the app state slice
 */
export const useBoardStatusSelector = (boardType: Board) => {
    return useAppSelector((state) => state.game.boardStatus[boardType]);
};

/** 
 * Select the selected item from the app state slice
 */
export const useCurrentPlayerSelector = () => {
    return useAppSelector((state) => state.player.currentPlayer);
};

/** 
 * Select the selected item from the app state slice
 */
export const useWinHistorySelector = () => {
    return useAppSelector((state) => state.game.winHistory);
};

/** 
 * Select the selected item from the app state slice
 */
export const useIsRunningSelector = () => {
    return useAppSelector((state) => state.game.isRunning);
};

/** 
 * Select the selected item from the app state slice
 */
export const useCurrentWinSelector = () => {
    return useAppSelector((state) => state.game.currentWin);
};

/** 
 * Select the selected item from the app state slice
 */
export const useTotalTimeSelector = () => {
    return useAppSelector((state) => state.game.totalTime);
};

/** 
 * Select the selected item from the app state slice
 */
export const useCurrentTimeSelector = () => {
    return useAppSelector((state) => state.game.currentTime);
};