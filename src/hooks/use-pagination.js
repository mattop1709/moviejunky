import { useState } from "react";

const displayItem = (currentPage, maxPerPage, index) => {
  const currentPageStart = (currentPage - 1) * maxPerPage + 1;
  const currentPageEnd = currentPage * maxPerPage;
  if (index + 1 >= currentPageStart && index + 1 <= currentPageEnd) {
    return true;
  }
  return false;
};

export const usePagination = (itemList, maxItemsPerPage = 30) => {
  const [items, setItems] = useState(itemList);
  const [currentPage, setCurrentPage] = useState(1);

  const isPaginating = items.length > maxItemsPerPage;
  const totalPages = Math.ceil(items.length / maxItemsPerPage);

  /**
   * @const Array represents min and max page
   */
  const [isMin, isMax] = [currentPage === 1, currentPage === totalPages];

  /**
   * @const pageItems is the array which has been set based on maximum
   * items per page
   */
  const pageItems = items.filter((_, index) => {
    if (!isPaginating) return true;
    if (!displayItem(currentPage, maxItemsPerPage, index)) return false;
    return true;
  });

  /**
   * to initiate array inside the pagination layer,
   * it will reset the sets of array after changing the items
   * @param     { any }     items   can be anything
   */
  function setItemList(items) {
    setCurrentPage(1);
    setItems(items);
  }

  /**
   * simple action to increase the current page and prevent
   * from increase current page if current page is equal to total page
   */
  function incrementPage() {
    if (isMax) return;
    // setCurrentPage(currentPage + 1);
    setCurrentPage(currentPage => currentPage + 1);
  }

  /**
   * on the other hand, we reduce current page and prevent the
   * current page to trigger if is equal to 1
   */
  function decrementPage() {
    if (isMin) return;
    // setCurrentPage(currentPage - 1);
    setCurrentPage(currentPage => currentPage - 1);
  }

  return {
    currentPage,
    totalPages,
    isPaginating,
    pageItems,
    setItemList,
    isPageState: [isMin, isMax],
    actions: [decrementPage, incrementPage],
  };
};
