type SetStateArgs<S> = S | ((prevState) => S);
type SetState<S> = (args: SetStateArgs<S>) => void;

type Store = {
  employeesList: Employees | undefined;
  setEmployeesList: SetState<Employees | undefined>;
};
