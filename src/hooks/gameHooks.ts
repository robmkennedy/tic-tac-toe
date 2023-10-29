import { useAppSelector } from 'hooks/stateHooks';
import { Board, Player } from 'utils/types';
import { useBoardStatusSelector, useBoardTypeSelector } from './selectorHooks';
import { isWinner } from 'utils/validation';

/** 
 * Select the selected item from the app state slice
 */
export const useCheckWinner = (): (Player | number[] | undefined)[] => {

    const boardType = useBoardTypeSelector();
    const boardStatus = useBoardStatusSelector(boardType);

    return isWinner(boardType, boardStatus);
};

