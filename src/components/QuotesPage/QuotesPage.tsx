import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import QuotesTable from "./components/QuotesTable/QuotesTable";
import { QuotesContext } from "../context";

interface Props {}

const QuotesPage: React.FC<Props> = ({}) => {
    const [data, setData] = useState<any>("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedQuote, setSelectedQuote] = useState(false);
    const [isError, setIsError] = useState<string | null>(null);
    const apiKey = "HmWB9BpqCRpFTlqOtLlTqS_mF07wgcJc";

    const { stopLoading, setStopLoading } = useContext(QuotesContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=${apiKey}`
                );
                if (response) {
                    setData(response.data);
                    setIsLoading(true);
                    setIsError(null);
                }
            } catch (err) {
                console.log(err);
                setIsError("fetching data Error");
            }
        };
        if (!stopLoading) {
            const intervalId = setInterval(fetchData, 5000);
            return () => {
                clearInterval(intervalId);
            };
        }
        fetchData();
    }, [stopLoading]);

    const handleSelectedQuote = () => {
        setSelectedQuote(true);
    };

    return (
        <>
            <h2>Котировки</h2>
            {isError && <div style={{ color: "red" }}>{isError}</div>}
            {isLoading ? (
                <div onClick={handleSelectedQuote} className="">
                    <div>
                        <QuotesTable
                            quotes={data}
                            stopLoading={stopLoading}
                            setStopLoading={setStopLoading}
                        />
                    </div>
                    <div>
                        <QuotesTable
                            quotes={data}
                            stopLoading={stopLoading}
                            setStopLoading={setStopLoading}
                        />
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default QuotesPage;
