import "./Appp.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Appp() {
  const [items, setItems] = useState([]);
  const { genres } = useParams();
  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&api_key=6a3a9e9a61085d657b30d36d1c7b5ba7&_limit=${limit}`
      )
      .then((res) => {
        setItems(res.data.results);
        const total = res.headers.get("x-total-count");
        console.log(res.data.results);
        setpageCount(Math.ceil(total / limit));
      });
  }, []);

  // useEffect(() => {
  //   const getComments = async () => {
  //     const res = await fetch(
  //       `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&api_key=6a3a9e9a61085d657b30d36d1c7b5ba7&_limit=${limit}`
  //       // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
  //     );
  //     const data = await res.json();
  //     const total = res.headers.get("x-total-count");
  //     setpageCount(Math.ceil(total / limit));
  //     // console.log(Math.ceil(total/12));
  //     setItems(data);
  //   };

  //   getComments();
  // }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=16&api_key=6a3a9e9a61085d657b30d36d1c7b5ba7`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    console.log(data);
    return data;

  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (
    <div className="container">
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-3 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 125 }}>
                <div className="card-body">
                <img  
                        className="movieimg"
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      />
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.name}
                  </h6>
                  <p className="card-text">{item.original_title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Appp;
