import ContentCard from "../components/content-card";
import ContentSideCard from "../components/content-side";

const HomePage = () => {
  return (
    <div>
      <ContentSideCard className="content-info" content="hello" />

      <div className="content">
        <div className="content-card">
          <ContentCard
            title="Welcome to my test website!"
            content="Hi! I'm Derek and this is just a personal website I have created during my spare time"
          />
          <p>
            Lorem ipsum dolor sit amet. Aut doloremque odit ut omnis officia quo
            ipsa voluptatem qui ducimus laborum a dolores illo ab quod neque et
            eius architecto. 33 quisquam animi cum incidunt quia et velit
            voluptas et quas porro eum mollitia galisum et quos voluptatem. A
            internos placeat ad expedita quia eum optio adipisci sit voluptas
            dolores et provident fugiat ut veniam explicabo.
          </p>
        </div>

        <div className="content-card">
          <ContentCard
            title="Blog section"
            content="Aut sunt rerum et minima quam sit minus exercitationem ea perferendis beatae. Hic doloribus necessitatibus ut omnis nihil et deserunt sapiente vel sint neque non quasi sint non eveniet galisum ex neque accusantium."
          />
        </div>

        <div className="content-card">
          <ContentCard
            title="Empty section"
            content="Vel delectus repellat et saepe sequi ut maxime officia vel ipsum maxime et sequi quidem. Ut consequatur aspernatur et voluptatem harum est sunt amet ut dolore obcaecati ad mollitia quae hic quae veniam. Qui voluptas voluptatibus quo libero enim ut blanditiis sapiente. Eum cumque dolorem ex laboriosam quam vel dolores minima cum numquam magni nam neque maiores qui facilis voluptatem ut architecto iusto."
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
