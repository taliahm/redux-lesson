import { INCREASE_ICEBERGS, DECREASE_ICEBERGS } from './types';

export const increaseIcebergCount = () => {
  return {
    type: INCREASE_ICEBERGS,
  }
}

export const decreaseIcebergCount = () => {
  return {
    type: DECREASE_ICEBERGS,
  }
}