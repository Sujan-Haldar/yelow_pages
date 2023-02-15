import ProfileBook from "../MyProfile/ProfileBook";

const BooksSection = ({ books, onDelete, lable }) => {
    if (books)
        return (
            <div className="admin_all2">
                <div className="heading">
                    <span>{lable}</span>
                </div>
                <table style={{ margin: "auto" }}>
                    {books.map(book => (
                        <ProfileBook
                            key={book._id}
                            book={book}
                            onDelete={onDelete}
                        />
                    ))}
                </table>
            </div>
        );

    return (
        <div className="admin_all2">
            <div className="heading">
                <span>No {lable} Found!</span>
            </div>
        </div>
    );
};

export default BooksSection;
