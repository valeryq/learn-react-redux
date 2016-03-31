export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

/**
 * Increment action
 *
 * @returns {{type: string}}
 */
export function increment(counter_id) {
  return { type: INCREMENT, counter_id: counter_id }
}

/**
 * Decrement action
 *
 * @returns {{type: string}}
 */
export function decrement(counter_id) {
  return { type: DECREMENT, counter_id: counter_id }
}