import { createSlice } from '@reduxjs/toolkit';

interface PourState {
  currentVolume: number;
  pourCount: number;
  vesselCapacity: number;
  toolVolume: number;
}

const initialState: PourState = {
  currentVolume: 0,
  pourCount: 0,
  vesselCapacity: 10,
  toolVolume: 1
};

const vessels = [10, 6, 1]; 
const tools = [1, 0.25]; 

const getRandomItem = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

const fillWaterSlice = createSlice({
  name: 'fillWater',  
  initialState,
  reducers: {
    pour(state) {
      if (state.currentVolume + state.toolVolume <= state.vesselCapacity) {
        state.currentVolume += state.toolVolume;
        state.pourCount += 1;
      }
    },
    remove(state) {
      if (state.currentVolume >= state.toolVolume) {
        state.currentVolume -= state.toolVolume;
        state.pourCount -= 1;
      }
    },
    reset(state) {
      state.currentVolume = 0;
      state.pourCount = 0;
    },
     nextTask(state) {
      state.vesselCapacity = getRandomItem(vessels);
      state.toolVolume = getRandomItem(tools);
      state.currentVolume = 0;
      state.pourCount = 0;
    },
  }
});

export const { pour, remove, reset ,nextTask} = fillWaterSlice.actions;

export default fillWaterSlice.reducer;
