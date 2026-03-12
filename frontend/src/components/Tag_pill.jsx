import styled from "styled-components";

const TagPill = ({ tagName }) => {
    return (
        <StyledTagPill>
            {tagName}
        </StyledTagPill>
    )
}

const StyledTagPill = styled.div`
    display: inline-flex;
    align-items: center;

    padding: 0.7rem 0.7rem;
    background-color: var(--primary);
    color: var(--text-primary);
    border-radius: 24px;
    font-size: 14px;
    white-space: nowrap;

    &:hover {
        background-color: var(--primary-hover);
    }
`;

export default TagPill;