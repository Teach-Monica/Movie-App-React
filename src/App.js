import "./App.css";
import { Routes, Route,  Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import bookdata from "./data.json";
import { AddColor } from "./AddColor";
import { Home } from "./Home";
// import { UserList } from "./UserList";
import { BookList } from "./BookList";
import { BookDetails } from "./BookDetails";
import { NotFoundPage } from "./NotFoundPage";
import { AddBook } from "./AddBook";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// import Example from "./context/Example";
import { EditBook } from "./EditBook";
// import { BasicForm } from "./BasicForm";


// eslint-disable-next-line no-unused-vars
const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://imgv2-1-f.scribdassets.com/img/word_document/506884166/original/216x287/f39dce63c4/1666992162?v=1",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
    trailer: "https://www.youtube.com/embed/Solb9uA-tgQ",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];

export default function App() {
  //1. Creating - createContext  ✅
  //2. Publisher - provider - context.provider ✅
  // 3.Subscriber - useContext - useContext(context)

  //Lifting the state up -> Lifted from child to parent
  const [bookList, setBookList] = useState([]);
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://63fd8351c639f8563141f462.mockapi.io/books")
      .then((response) => response.json())
      .then((data) => setBookList(data));
  }, []); // called only once

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/books")}>
              BookList
            </Button>
            <Button color="inherit" onClick={() => navigate("/books/add")}>
              AddBook
            </Button>
            <Button color="inherit" onClick={() => navigate("/add-color")}>
              AddColor
            </Button>
            {/* <Button color="inherit" onClick={() => navigate("/user-profile")}>
              UserList
            </Button> */}
            {/* <Button
              color="inherit"
              onClick={() => navigate("/context-example")}
            >
              Example
            </Button> */}
            {/* <Button color="inherit" onClick={() => navigate("/form")}>
              Basic Form
            </Button> */}
            <Button
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} Mode
            </Button>
          </Toolbar>
        </AppBar>

        {/* <nav>
        <ul>
          <li>
            //Link change page without refresh
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
          <li>
            <Link to="/books/add">AddBook</Link>
          </li>
          <li>
            <Link to="/add-color">AddColor</Link>
          </li>
          <li>
            <Link to="/user-profile">UserList</Link>
          </li>
        </ul>
      </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:bookid" element={<BookDetails />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:bookid" element={<EditBook />} />
          <Route path="/add-color" element={<AddColor />} />
          {/* <Route path="/user-profile" element={<UserList />} /> */}
          {/* <Route path="/context-example" element={<Example />} /> */}
          {/* <Route path="/form" element={<BasicForm />} /> */}
          <Route path="/novel" element={<Navigate replace to="/books" />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}


