import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header_part = () => {

    const isLoggedIn = (sessionID) => {
        if (sessionID !== null) {
            return true;
        }
        return false;
    };

    return (
        <LandingHeader>
            <TitleContainer>
                <Link to="/"><h1>Read_MangaKas</h1></Link>
            </TitleContainer>

            <RoutesContainer>
                {isLoggedIn(null) ? (
                    <>
                        <ProfileButton to="/profile">
                            <img src="/profile_button.png" alt="profile picture" />
                        </ProfileButton>
                    </>
                ) : (
                    <>
                        <Button name="Sign In" to="/login" />
                        <Button name="Sign Up" to="/register" />
                    </>
                )}
            </RoutesContainer>
        </LandingHeader>
    );
};

const LandingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(26, 26, 36, 0.95);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const TitleContainer = styled.div`
  a {
    text-decoration: none;
  }

  h1 {
    color: var(--text-primary);
    font-size: 1.8rem;
    margin: 0;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const RoutesContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 200px;
    justify-content: center;
  }
`;

const ProfileButton = styled(Link)`
  background-color: var(--text-muted);
  border: solid var(--border) 1px;
  border-radius: 100px;
`;

export default Header_part;
