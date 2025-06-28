import { useContext } from "react";
import { FormElementContext } from "../components/ReusableForms";
const useForms = () => {
    return useContext(FormElementContext)
};

export default useForms;


