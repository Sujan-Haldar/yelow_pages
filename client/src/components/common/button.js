const Button = ({ lable, onClick }) => {
    return (
        <button type="button" onClick={onClick} class="btn">
            {lable}
        </button>
    );
};

export default Button;
