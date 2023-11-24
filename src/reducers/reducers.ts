// import { MainState, ActionType } from "../intefaces/interfaces"

// const enum Status {
//   OK = 'idle',
//   ERROR = 'error',
//   LOADING = 'loading',
// }

// const initialState: MainState = {
//   menu: [],
//   menuLoadingStatus: 'idle',
// }

// const reducer = (state = initialState, action: ActionType) => {
//   switch (action.type) {
//     case "MENU_FETCHING":
//       return {
//         ...state,
//         menuLoadingStatus: Status.LOADING
//       }
//     case "MENU_FETCHED":
//       return {
//         ...state,
//         menu: action.payload ? [...state.menu, ...action.payload]: [...state.menu],
//         menuLoadingStatus: Status.OK
//       }
//     case "MENU_FETCHING_ERROR":
//       return {
//         ...state,
//         menuLoadingStatus: Status.ERROR
//       }
//     default: return state
//   }
// }

// export default reducer;