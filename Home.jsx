

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import "./Home.css";

function Home() {
    const books = useSelector(store => store.cart.books);

    // definig category in array with the paths
    const categories = [
        { name: "Fiction", path: "/books/fiction" },
        { name: "Non-Fiction", path: "/books/non-fiction" },
        { name: "History", path: "/books/history" },
        { name: "Biography", path: "/books/biography" },
        { name: "Horror", path: "/books/horror" },
        { name: "Fantasy", path: "/books/fantasy" }
    ];

    // momoried popiler book
    const popularBooks = useMemo(() => books.slice(0, 8), [books]);

    return (
        <>
            <div className="supcontainer">
                <h2 className="bookcategories">Book Categories</h2>
                <br />
                <div className="categories">
                    {categories.map(cat => (
                        <Link key={cat.name} to={cat.path} className="categoriesChild">
                            <h4>{cat.name}</h4>
                        </Link>
                    ))}
                </div>
            </div>

            <h2 className="popularbooks">Popular Books</h2>
            <br />
            <br />
            <div className="popular">
                {popularBooks.map(book => (
                    <div key={book.id} className="browsebookschild">
                        <img 
                            src={book.coverImage} 
                            alt={`Cover of ${book.title}`} 
                            height="250px" 
                            width="250px" 
                        />
                        <h4>{book.title}</h4>
                        <p>by {book.author}</p>
                        <br />
                        <Link to={`/books/details/${book.id}`} className="viewdetails">View Details</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
