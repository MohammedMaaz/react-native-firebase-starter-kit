import { Toast } from "native-base";

export const localErrorHandler = ({ namespace, error, stopLoading }) => {
  throw { error, stopLoading, namespace };
};

export const globalErrorHandler = (e, dispatch) => {
  e.preventDefault && e.preventDefault();
  let error = e;

  if (e.error) error = e.error;
  console.warn(error);

  if (error.message || typeof error === "string")
    Toast.show({
      type: "danger",
      text: error.message || error,
      duration: 3000,
    });
  else
    Toast.show({ type: "danger", text: "An error occurred!", duration: 3000 });

  if (e.stopLoading && dispatch)
    dispatch({
      type: `${e.namespace}/stopLoading`,
      loadingType: e.stopLoading,
    });
};
