import Alert from "react-bootstrap/Alert";
import loading from "../loading.gif";

/**
 * This function is used to determine whether a promise is active or have resolved or errored out.
 * This function indicates whether the app is loading data, the search errored out or if there is no promise at all.
 * @param promise The (active?) promise
 * @param data The data extracted from the promise fulfillment
 * @param error The error that might have been thrown when trying to resolve the promise
 */
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