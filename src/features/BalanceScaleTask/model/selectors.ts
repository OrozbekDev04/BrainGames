import type { RootState } from '../../../app/store';

export const selectLeftMoment = (state: RootState) =>
  state.balance.leftWeights.reduce(
    (sum, w) => sum + w.value * Math.abs(w.position),
    0
  );

export const selectRightMoment = (state: RootState) =>
  state.balance.rightWeights.reduce((sum, w) => sum + w.value * w.position, 0);
