module.exports = ({ previewImgSrc }) => {
    if (previewImgSrc.startsWith("http")) return previewImgSrc;
    return `http://localhost:3030/bookimage/${previewImgSrc}`;
};
