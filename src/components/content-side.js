const ContentSideCard = ({ imgsrc, alttext, content }) => {
  return (
    <div className="content-info">
      {/* Image goes here */}
      <img src={imgsrc} alt={alttext} />
      <p>{content}</p>
    </div>
  );
};
export default ContentSideCard;
