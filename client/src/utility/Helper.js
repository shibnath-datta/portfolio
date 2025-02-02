import toast from "react-hot-toast";


class FormHelper {
  IsEmpty(value) {
    return value.length === 0; // true if get empty
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
  }

  SuccessToast(msg) {
    toast.success(msg);
  }
  ErrorToast(msg) {
    toast.error(msg);
  }
}

export const { getBase64, SuccessToast, ErrorToast, IsEmpty } = new FormHelper();
