import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const onlineEvent = window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    const offlineEvent = window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    return () => {
      window.removeEventListener("online", onlineEvent);
      window.removeEventListener("offline", offlineEvent);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
