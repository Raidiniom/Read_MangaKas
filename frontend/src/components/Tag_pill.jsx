import styled from "styled-components";

const TagPill = ({ tagName, onClick }) => {
    return (
        <StyledTagPill onClick={onClick}>
            {tagName}
        </StyledTagPill>
    )
}

const StyledTagPill = styled.div`
    padding: 0.25rem 0.75rem;
    background-color: var(--primary);
    color: var(--text-primary);
    border-radius: 12px;
    font-size: 14px;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;

    &:hover {
        background-color: var(--primary-hover);
    }
`;

export default TagPill;