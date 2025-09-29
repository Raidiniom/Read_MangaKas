import './styles/landing.css'
import Search_bar from './Search_bar';
import Header_part from './Header_part';

export default function Landing_page() {
    
    return (
        <>
            <div className="landing-header">
                <Header_part />
            </div>
          <div className='landing-body'>
            <div className='top-manga-display'>
              {/* displays top rated mangas being reed all time on the site */}
            </div>

            <div className="search-bar">
              <Search_bar />
            </div>
          </div>
        </>
    )
}