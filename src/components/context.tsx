import { Dispatch, createContext, useState } from "react";
type QuotesContextType = {
    stopLoading: boolean;
    setStopLoading: Dispatch<React.SetStateAction<boolean>>;
};
export const QuotesContext = createContext<QuotesContextType>({
    stopLoading: false,
    setStopLoading: () => {},
});

export const QuotesContextProvider = ({ children }: any) => {
    const [stopLoading, setStopLoading] = useState<boolean>(false);
    console.log(stopLoading);

    return (
        <QuotesContext.Provider value={{ stopLoading, setStopLoading }}>
            {children}
        </QuotesContext.Provider>
    );
};
