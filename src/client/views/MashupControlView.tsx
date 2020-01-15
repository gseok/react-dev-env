import React, { useState, useEffect, useCallback } from "react";
import { useDebouncedCallback } from '../hooks/useDebouncedCallback';
import SearchInput from '../components/SearchInput';
import SearchResultList, { SearchResultListData} from '../components/SearchResultList';

const mockAPIFetch = (text: string): Promise<SearchResultListData[]> => {
  const predefinedMockupNames: string[] = [
    '수박', '귤', '포도', '배', '사과'
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResultNumber = Math.floor(Math.random() * 10);
      const result: SearchResultListData[] = [];

      for (let i = 0; i < mockResultNumber; i += 1) {
        const time = new Date().getTime();
        result.push({
          name: `${text} - ${predefinedMockupNames[mockResultNumber%predefinedMockupNames.length]}`,
          desc: `${time} - search desc...`,
        })
      }

      resolve(result);
    }, 1000);
  })
}

const MashupControlView = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResultListData[] | undefined>();

  useEffect(() => {
    console.log('serach value changed > ', searchValue);
    async function mockAsyncAPICall(text: string) {
      const response: SearchResultListData[] = await mockAPIFetch(text);
      setSearchResult(response);
    }

    if (searchValue) {
      mockAsyncAPICall(searchValue);
      return;
    }
    setSearchResult(undefined);
  }, [searchValue]);

  const onChnageHandler = useDebouncedCallback(value => setSearchValue(value), 500);

  return (
    <>
      <SearchInput
        value={'init value test...@@@@@'}
        placeholder={'placeholder test...!!!'}
        onChange={onChnageHandler}
      />
      <SearchResultList listViewData={searchResult} />
    </>
  );
};

export default MashupControlView;
