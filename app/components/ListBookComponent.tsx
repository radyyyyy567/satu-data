import axios from "axios";
import { useEffect, useState } from "react";

interface Book {
  id: string;
  title: string;
  filename: string;
}

interface ListBookProps {
  year: string;
}

const ListBookComponent = ({ year }: ListBookProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/book/year/${year}`);
        const fetchedBooks: Book[] = response.data.BookPostByYear; // Assuming BookPostByYear contains the array of books
        setBooks(fetchedBooks);
      } catch (error: any) {
        console.log(error.response?.data.message);
      }
    };

    fetchData();
  }, [year]);

  return ( 
    <div>
      <ul>
        {books.length === 0 ? (
          <li className="text-gray-700">Belum ada buku terbit di tahun {year}</li>
        ) : (
          books.map((book) => (
            <li key={book.id}>
              <a className="" href={`${process.env.NEXT_PUBLIC_API_URL}/products/download/${book.filename}/${book.title}`} download>
                {book.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
  
};

export default ListBookComponent;
