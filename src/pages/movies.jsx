import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFilm } from 'api/fetchFilm';
import { Link } from 'react-router-dom';

const ListOfFilm = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    font-size: 18px;
    font-weight: 600;
  }
`;


const Container = styled.section`
  padding: 20px;
  background-color: #fff;
`;

const ErrorText = styled.p`
  margin-top: 20px;
  color: red;
`;

const Movies = () => {
  const [searchFilm, setSearchFilm] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const location = useLocation(); //для отримання шляху з якого переходимо для передачи через props
  
  
  useEffect(() => {
    const query = searchFilm.get("filmName")
    if(!query ) return;
        const fetchFilm = async () => {
          try {
            const date = await getFilm(query );
            const films = date.results;
    
            if (!films.length ) {
              setError(`Фільми зі словом ${query } не знайдені`);
              setFilms([]);
              setStatus('rejected');
            } else {
              setFilms(films);
              setError(null);
            }
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchFilm();
      },[searchFilm]);

      const updateSearch = event => {
        event.preventDefault()
            const filmNameValue = event.target.elements.query.value;
            if (filmNameValue === '') {
              return setSearchFilm({});
            }
            setSearchFilm({ filmName: filmNameValue });
          };

  return (
    <Container>
      
      <form onSubmit={updateSearch}>
        <input
          type="text"
name="query"
          placeholder="Search movies..."
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
      

      {status === 'rejected' && <ErrorText>{error}</ErrorText>}

      <ListOfFilm>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListOfFilm>
    </Container>
  );
};

export default Movies;
