import React from 'react';
import styled from 'styled-components';

const Button = ({ name, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.button`
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
  
  &:hover:not(:disabled) {
    background: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(149, 44, 210, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(149, 44, 210, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    min-width: 100px;
    font-size: 13px;
  }
`;

export default Button;