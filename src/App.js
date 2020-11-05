import Post from "./components/Post/Post"
import posts from "./postsJson/posts.json"

function App() {
    return (
        <div className="App">
          {posts.map(({title, description, image}, key) => {
            return (
              <Post key={key} title={title}
              description={description}
              image={image} />
            )
          })}
        </div>
    );
}

export default App;
