import { useContext } from "react";
import { NewCountContext } from "../App";

const ContextReducer = () => {
	const mycount = useContext(NewCountContext);
	return <div>{mycount}</div>;
};

export default ContextReducer;
