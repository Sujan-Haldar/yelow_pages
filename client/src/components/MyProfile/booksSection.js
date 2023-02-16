import ProfileBook from "./ProfileBook";

const BooksSection = ({ books, onDelete, lable }) => {
    if (books)
        return (
            <div>
                <div className="heading">
                    <span>{lable}</span>
                </div>
                <table style={{ margin: "auto" }}>
                    {books.map(book => (
                        <ProfileBook
                            key={book._id}
                            book={book}
                            onDelete={onDelete}
                            pageLable={lable}
                        />
                    ))}
                </table>
            </div>
        );

    return (
        <div className="admin_all2">
            <div className="heading">
                <span>{lable} is Empty!</span>
            </div>
        </div>
    );
};

export default BooksSection;
