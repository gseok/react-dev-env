import React from "react";

export type SearchResultListData = {
  name: string;
  desc: string;
}

export type SearchResultListProps = {
  listViewData?: SearchResultListData[];
};

const ListItem = ({ name, desc }: SearchResultListData) => {
  return (
    <div>
      <span>{name}</span>
      <span>{desc}</span>
    </div>
  );
}

const SearchResultList = ({ listViewData = [] }: SearchResultListProps) => {
  console.log('list data > ', listViewData);
  if (listViewData.length === 0) {
    return (
      <div>
        <span>No Data</span>
      </div>
    );
  }

  return (
    <>
      {listViewData.map((data: SearchResultListData, index: number) => {
        return <ListItem name={data.name} desc={data.desc} key={`${index}`} />
      })}
    </>
  );
};

export default SearchResultList;
