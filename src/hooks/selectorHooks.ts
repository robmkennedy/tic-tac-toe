import { useAppSelector } from 'hooks/stateHooks';
import { Board } from 'utils/types';

/** 
 * Select the selected item from the app state slice
 */
export const useBoardTypeSelector = () => {
    return useAppSelector((state) => state.app.boardType);
};

/** 
 * Select the selected item from the app state slice
 */
export const useBoardStatusSelector = (boardType: Board) => {
    return useAppSelector((state) => state.app.boardStatus[boardType]);
};

/** 
 * Select the selected item from the app state slice
 */
export const useCurrentPlayerSelector = () => {
    return useAppSelector((state) => state.player.currentPlayer);
};