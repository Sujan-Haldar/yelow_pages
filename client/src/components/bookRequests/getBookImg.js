module.exports = ({ previewImgSrc }) => {
    if (previewImgSrc.startsWith("http")) previewImgSrc = "book-default.png";
    return `${process.env.REACT_APP_API_URL}/bookimage/${previewImgSrc}`;
};
