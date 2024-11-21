import { toast } from "react-toastify";

export const notify = (message, options = {}) => {
  toast(message, options);
};
