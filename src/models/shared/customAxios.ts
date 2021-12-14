import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export const customAxios = applyCaseMiddleware(axios.create());
