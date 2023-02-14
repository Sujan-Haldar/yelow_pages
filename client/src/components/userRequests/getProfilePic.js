module.exports = ({ profilePicSrc }) => {
    if (profilePicSrc.startsWith("http")) return profilePicSrc;
    return `http://localhost:3030/default_images/${profilePicSrc}`;
};
