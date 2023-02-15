const Button = ({ lable, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="btn"
            style={{ margin: "1rem" }}
        >
            {lable}
        </button>
    );
};

export default Button;
