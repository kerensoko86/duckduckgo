export const itemsPerPage = 5;

export const flatQueries = (queriesResults) => {
  return queriesResults
    .map(({ queryList, searchParam }) => {
      return queryList.map((query) => ({
        ...query,
        searchParam,
      }));
    })
    .flat()
    .reverse();
};
