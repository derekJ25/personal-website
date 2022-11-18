const ContentCard = ({ title, content }) => {
    return (
        <div className="content-section">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
export default ContentCard;