import {ComponentProps, FC} from "react";

export const GoalItem: FC<ComponentProps<any>> = ({children}) => {
    return (
        <div className="border-2 border-blue-200 p-6 px-20 rounded my-2 cursor-pointer hover:bg-gray-50">{children}</div>
    )
};
