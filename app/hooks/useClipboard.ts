import { useState } from "react";
import { showToast } from "../components/toast/toast";

type onCopyFn = (text: string) => Promise<boolean>;

function useCopyClipBoard(): [boolean, onCopyFn] {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onCopy: onCopyFn = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      showToast({
        type: "success",
        message: "복사에 성공하였습니다.",
      });
      return true;
    } catch (error) {
      console.error(error);
      showToast({
        type: "error",
        message: "복사에 실패하였습니다.",
      });
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
}

export default useCopyClipBoard;
