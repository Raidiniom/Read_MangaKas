import React from 'react';
import styled from 'styled-components';

const Button_login = () => {
  return (
    <StyledWrapper>
      <button className="header-btn">
        Login
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .header-btn {
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--primary);
    min-width: 120px;
  }

  .header-btn:hover {
    background: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(149, 44, 210, 0.3);
  }

  @media (max-width: 768px) {
    .header-btn {
      padding: 0.6rem 1.5rem;
      min-width: 100px;
      font-size: 13px;
    }
  }`;

export default Button_login;