import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
    quotes: {
        ticker: string;
        results: [
            {
                v: number;
                vw: number;
                o: number;
                c: number;
                h: number;
                t: number;
                key: number;
            }
        ];
    };
    stopLoading: boolean;
    setStopLoading: Dispatch<SetStateAction<boolean>>;
}

const QuotesTable: React.FC<Props> = ({
    quotes,
    stopLoading,
    setStopLoading,
}) => {
    const [selectedQuoteClick, setSelectedQuoteClick] =
        useState<boolean>(false);

    const handleSelectedQuoteClick = () => {
        setSelectedQuoteClick(!selectedQuoteClick);
        setStopLoading(!stopLoading);
    };
    const tableClassName = `border-collapse w-full border-gray-300 ${
        selectedQuoteClick
            ? "fixed inset-0 m-0 flex justify-center items-center bg-opacity-75 bg-gray-900"
            : "m-10"
    }`;
    return (
        <table className={tableClassName} onClick={handleSelectedQuoteClick}>
            <thead>
                <tr className="bg-gray-100 text-gray-700">
                    <th className="py-2 px-4 border-b border-gray-300">
                        Ticker
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300">Last</th>
                    <th className="py-2 px-4 border-b border-gray-300">
                        Highest Bid
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300">
                        Percent Change
                    </th>
                </tr>
            </thead>
            <tbody>
                {quotes ? (
                    quotes.results.map((quote) => {
                        const last = quote.c;
                        const highestBid = quote.h;
                        const percentChange =
                            ((last - quote.o) / quote.o) * 100;

                        return (
                            <tr
                                key={quote.t}
                                className="text-yellow-50 border-b border-gray-300"
                            >
                                <td className="py-2 px-4">{quotes.ticker}</td>
                                <td className="py-2 px-4">{last}</td>
                                <td className="py-2 px-4">{highestBid}</td>
                                <td className="py-2 px-4">
                                    {percentChange.toFixed(2)}%
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td className="py-2 px-4" colSpan={4}>
                            Loading...
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default QuotesTable;
