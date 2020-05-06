import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`
export const FilterArea = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #025951;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h3 {
        color: #025951;
        background: #fff;
        position: relative;
        top: 30px;
        padding: 0 10px;
    }
`