// src/features/FillWaterTask/model/selectors.ts
import type { RootState } from '../../../app/store';

export const selectCurrentAmount = (state: RootState) => state.fillWater.currentVolume;
export const selectPourCount = (state: RootState) => state.fillWater.pourCount;
export const selectVesselCapacity = (state: RootState) => state.fillWater.vesselCapacity;
export const selectToolVolume = (state: RootState) => state.fillWater.toolVolume;
