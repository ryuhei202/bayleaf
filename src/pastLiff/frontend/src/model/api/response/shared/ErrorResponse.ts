export default interface ErrorResponse {
  status: number;
  messages: string[] | null;
  errors: { [key: string]: object } | null;
  errorStruct: { [model: string]: { [key: string]: string[] } } | null;
}

export const DefaultErrorResponse = (): ErrorResponse => {
  return {
    status: 200,
    messages: null,
    errors: null,
    errorStruct: null
  };
};
