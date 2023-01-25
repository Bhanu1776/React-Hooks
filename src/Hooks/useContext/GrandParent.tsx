import { createContext } from "react";

type ObjectType = {
  Name: string;
  Age: number;
};

const UserData: ObjectType = {
  Name: "Bhanu",
  Age: 20,
};

type ChildrenType = {
  children: React.ReactNode;
};

export const AppContext = createContext(UserData);

export const GrandParent = ({ children }: ChildrenType) => {
  return <AppContext.Provider value={UserData}>{children}</AppContext.Provider>;
};
