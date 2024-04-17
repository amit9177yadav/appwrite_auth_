import { useState } from 'react';
import { useUser } from '../../src/lib/Context/UserProvider';
import { useIdeas } from '../../src/lib/Context/ideas';
import '../Pages/styles/Styles1.css';
import bgimg1 from '../assets/bgimg.jpg';

function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stack, setStack] = useState('');

  return (
    <>
      {user.current ? (
        <section className='section-container' style={{ backgroundImage: `url(${bgimg1})` }}>
          <h2>Submit Idea</h2>
          <form className='form-container'>
            <div>
              <label>Title :
                <input
                type="text"
                placeholder="Title"
                className="form-input"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              </label>
              <label>Description :
              <textarea
                placeholder="Description"
                className="form-textarea"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
              </label>
              <label>Stack :
              <input
                type="text"
                placeholder="Stack"
                className="form-input"
                value={stack}
                onChange={(event) => {
                  setStack(event.target.value);
                }}
              />
              </label>
            </div>
            <button
              type="button"
              className='submit-btn'
              onClick={() => {
                ideas.add({ userId: user.current.$id, title, description, stack });
                setTitle('');
                setDescription('');
                setStack('');
              }}
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
      <section className='ideas-section'>
        <h2>Latest Ideas</h2>
        {ideas.current.map((idea) => {
          return (
            <div key={idea.$id} className='idea-content'>
              <strong className='idea_title'>{idea.title}</strong>
              <p className='idea_description'>{idea.description}</p>
              <strong className='idea_stack'>{ idea.stack}</strong>
              {user.current && user.current.$id === idea.userId && (
                <button type="button" className="remove-btn" onClick={() => ideas.remove(idea.$id)}>
                  &#x2715; 
                </button>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Home;
