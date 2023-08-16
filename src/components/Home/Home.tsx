import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Home: React.FC<Props> = ({}) => {
    return (
        <div className="flex justify-around ">
            <Link to={"/about"}>
                <button className="border-2 p-1 rounded-[4px]">
                    О приложении
                </button>
            </Link>
            <Link to={"/quotes"}>
                <button className="border-2 p-1 rounded-[4px]">
                    Котировки
                </button>
            </Link>
        </div>
    );
};

export default Home;
