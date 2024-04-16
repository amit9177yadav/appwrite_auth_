import { useState } from 'react';
import { useUser } from '../../src/lib/Context/UserProvider'; 
import { useIdeas } from '../../src/lib/Context/ideas'; 
import '../Pages/styles/Styles1.css';
function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      {user.current ? (
        <section className='section-container'>
          <h2>Submit Idea</h2>
          <form className='form-container'>
            <div>
               <input
              type="text"
                placeholder="Title"
                className="form-input"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
                placeholder="Description"
                className="form-textarea"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            </div>
            <button
              type="button"
              className='submit-btn'
              onClick={() =>
                ideas.add({ userId: user.current.$id, title, description })
              }
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section>
          <p>Please log in to submit an idea.</p>
        </section>
      )}
      <section>
        <h2>Latest Ideas</h2>
        <ul>
          {ideas.current.map((idea) => (
            <li key={idea.$id}>
              <strong>{idea.title}</strong>
              <p>{idea.description}</p>
              {user.current && user.current.$id === idea.userId && (
                <button type="button" onClick={() => ideas.remove(idea.$id)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
