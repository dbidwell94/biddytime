import { useEffect } from "react";

export default function useAsyncEffect(asyncCallback: () => Promise<void>, dependancyArray: any[]) {
  useEffect(() => {
    asyncCallback();
  }, dependancyArray);
}
