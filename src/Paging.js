const Paging = ({gotoNextPage, gotoPrevPage}) => {
    return ( 
        <div className="paging">
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
     );
}
 
export default Paging;