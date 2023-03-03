import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { API } from "./global";
export function BookDetails() {
  const { bookid } = useParams();

  // const book = bookList[bookid];
  // console.log(bookList, book);

  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bk) => setBook(bk));
  }, []); // called only once

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="480"
        src={book.trailer}
        title="The Power of Your Subconscious Mind (1963) by Joseph Murphy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
