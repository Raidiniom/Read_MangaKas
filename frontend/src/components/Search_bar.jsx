import styled from 'styled-components';
import { mockMangas } from '../data/mockData';

/**
 * Search Functionality
 * Uses the Search_bar component
 * 
 * NOTE: This is a basic implementation both in functionality, UI/UX, and with mock data
*/

const Search_bar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // Search through mock data
    const results = mockMangas.filter(manga => 
      manga.title.toLowerCase().includes(query.toLowerCase()) ||
      manga.title_jp?.toLowerCase().includes(query.toLowerCase()) ||
      manga.author?.toLowerCase().includes(query.toLowerCase()) ||
      manga.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    // Pass results to parent component
    if (onSearch) {
      onSearch(results);
    }
    
    console.log('[DEBUG] Search results:', results);
  };

  return (
    <StyledWrapper>
      <form className="searchBox" onSubmit={handleSearch}>
        <input 
          className="searchInput" 
          type="text" 
          placeholder="Search for manga..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="searchButton" type="submit" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                  stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .searchBox {
    display: flex;
    max-width: 500px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 50px;
    position: relative;
    transition: all 0.3s ease;
  }

  .searchBox:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(149, 44, 210, 0.2);
    transform: translateY(-1px);
  }

  .searchButton {
    color: var(--text-primary);
    position: absolute;
    right: 8px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--primary);
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.23, 1, 0.32, 1);
  }

  .searchButton:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(149, 44, 210, 0.3);
  }

  .searchButton:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(149, 44, 210, 0.2);
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    color: var(--text-primary);
    font-size: 16px;
    padding: 16px 60px 16px 24px;
    width: 100%;
    border-radius: 50px;
  }

  .searchInput::placeholder {
    color: var(--text-muted);
    opacity: 0.7;
  }

  .searchButton svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    .searchBox {
      max-width: 100%;
    }
    
    .searchInput {
      padding: 14px 56px 14px 20px;
      font-size: 14px;
    }
    
    .searchButton {
      width: 40px;
      height: 40px;
    }
  }`;

  export default Search_bar;