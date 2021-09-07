import Alert from "react-bootstrap/Alert";
import loading from "../loading.gif";

function promiseNoData(promise: Promise<any> | undefined, data: any, error: Error | undefined) {
  return (
    (!promise && <Alert variant={"info"} className={"mt-2 center-content"}>Enter a search term</Alert>)
    ||
    (error && <Alert variant={"danger"} className={"mt-2 center-content"}>{error.message}</Alert>)
    ||
    (!data && <img src={loading} alt={"Loading"} width={"5%"} />)
  );
}

export default promiseNoData;