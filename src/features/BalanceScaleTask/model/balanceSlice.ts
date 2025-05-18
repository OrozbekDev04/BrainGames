import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const generateRandomLeftPositions = (count: number): number[] => {
  const positions = new Set<number>();
  while (positions.size < count) {
    positions.add(Math.floor(Math.random() * 10) * -1 - 1);
  }
  return Array.from(positions);
};

interface Weight {
  value: number;
  position: number;
}

interface BalanceState {
  leftWeights: Weight[];
  rightWeights: Weight[];
  availableWeights: number[];
  isWinner: boolean;
}

const initialLeftPositions = generateRandomLeftPositions(2);

const initialState: BalanceState = {
  leftWeights: [
    { value: 6, position: initialLeftPositions[0] },
    { value: 7, position: initialLeftPositions[1] }
  ],
  rightWeights: [],
  availableWeights: [6, 7],
  isWinner: false
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    addRightWeight: (
      state,
      action: PayloadAction<{ value: number; position: number }>
    ) => {
      const { value, position } = action.payload;
      const weightIndex = state.availableWeights.indexOf(value);

      if (weightIndex === -1 || position <= 0) return;

      state.rightWeights.push({ value, position });
      state.availableWeights.splice(weightIndex, 1);

      const leftMoment = state.leftWeights.reduce(
        (sum, w) => sum + w.value * Math.abs(w.position),
        0
      );
      const rightMoment = state.rightWeights.reduce(
        (sum, w) => sum + w.value * w.position,
        0
      );

      state.isWinner = leftMoment === rightMoment && leftMoment !== 0;
    },
    nextBalance: (state) => {
      const newPositions = generateRandomLeftPositions(2);
      state.leftWeights = [
        { value: 6, position: newPositions[0] },
        { value: 7, position: newPositions[1] }
      ];
      state.rightWeights = [];
      state.availableWeights = [6, 7];
      state.isWinner = false;
    },
    resetGame: (state) => {
      state.rightWeights = [];
      state.availableWeights = [6, 7];
      state.isWinner = false;
    }
  }
});

export const { addRightWeight, resetGame, nextBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
