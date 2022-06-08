import {ComponentProps, FC} from "react";

export const List: FC<ComponentProps<any>> = ({ children }) => {
    return (
        <div className="border-2 border-blue-50 p-2">{children}</div>
    )
};
