interface State {
  count: number;
  isRunning: boolean;
}

type Action =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESET' }
  | { type: 'TICK' };

export const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'PAUSE':
      return { ...state, isRunning: false };
    case 'RESET':
      return { ...state, count: 0, isRunning: false };
    case 'TICK':
      return {
        ...state,
        count: state.isRunning ? state.count + 1 : state.count,
      };
    default:
      return state;
  }
};
