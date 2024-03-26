import { useState, ChangeEvent, useEffect } from "react";

export const useForm = <T>(initialForm: T = {} as T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  useEffect(() => {
    localStorage.setItem("hugData", JSON.stringify(formState));
  }, [formState]);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
