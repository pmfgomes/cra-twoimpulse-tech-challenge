import create, { GetState, State, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import produce, { Draft } from "immer";
import pipe from "ramda/es/pipe";
import { WritableDraft } from "immer/dist/types/types-external";
import EMPLOYEE_DATA from "mocks/employeeData";

const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>,
  ): StateCreator<T> =>
  (set, get, api): any =>
    config(fn => set(produce<T>(fn)), get, api);

const createStore = pipe(immer, devtools, create);

const setStateHelper = (
  argName: string,
  argValue: SetStateArgs<any>,
  set: (fn: (draft: WritableDraft<Store>) => void) => void,
  get: GetState<Store>,
) => {
  set(state => ({
    ...state,
    [argName]: typeof argValue === "function" ? argValue(get()[argName]) : argValue,
  }));
};

const useStore = createStore<Store>((set, get) => ({
  employeesList: EMPLOYEE_DATA,
  setEmployeesList: employeesList => {
    setStateHelper("employeesList", employeesList, set, get);
  },
}));

export default useStore;
