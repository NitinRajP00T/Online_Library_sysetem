import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import './BookDetals.css';

function BookDetails() {
    
    const { id } = useParams();
    const books = useSelector((store) => store.cart.books);
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) 
        return <p>Book not found</p>;
    
    return (
        <>  
            <br />
            <br />
            <Link to="/browse" className="Undo" >Back to Browse</Link>
            
            <br />
            <br />
            <br />

            <div className="bookdetails_contrainer">
                <img src={book.coverImage} alt={`Image of ${book.title}`} height="300px" width="100%" className="bookdetailsimage" />
                <h1 className="bookdetails">{book.title}</h1>
                <p className="bookdetails"><strong>Author:</strong> {book.author}</p>
                <p className="bookdetails"><strong>Published Date:</strong> {book.publishedDate}</p>
                <p className="bookdetails"><strong>Description:</strong> {book.description}</p>
                <p className="bookdetails"><strong>Pages :</strong> {book.pages}</p>
                <p className="bookdetails"><strong>Rating :</strong> {book.rating}</p>
            </div>
            
        </>
    );
}

export default BookDetails;