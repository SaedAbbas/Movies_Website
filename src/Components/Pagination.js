import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const PaginationComponent = () => {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);
  useEffect(() => {
    setPageCount(pages);
  }, [pages]);


  // عشان لما تضغط عرقم صفحة يجيبلك كل الافلام اللي بالصفحة
 

  const handlePageClick = (data) => {
    // console.log(data.selected + 1);
    dispatch(getPage(data.selected + 1));

  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
