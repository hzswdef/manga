import { useEffect } from 'react';

const siteName = import.meta.env.VITE_SITE_NAME;

const useTitle = (title: string) => {
  useEffect(() => {
    return () => {
      document.title = siteName + " | " + title;
    }
  });
}

export default useTitle;
