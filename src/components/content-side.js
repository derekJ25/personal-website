const ContentSideCard = ({ imgsrc, alttext, title, content }) => {
  return (
    <div className="content-info">
      {/* Image goes here */}
      <img src={imgsrc} alt={alttext} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
export default ContentSideCard;
