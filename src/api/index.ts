import { useState } from 'react';

interface IData{
  full_short_link:string,
  original_link:string
}
export default function useShortenApi() {
  const [data, setData] = useState<IData>();
  const getLink = async (link: string) => {
        try {
          const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
          const data = await res.json();
          setData(data.result);
        } catch (error) {
          console.log(error);
        }

  }

  return {
    data,
    getLink
  }
}