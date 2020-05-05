import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 60px;
    background: ${props => props.actived ? '#f25116' : '#025951' };
    padding: 10px;
    cursor: pointer;

    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 15px;
        height: 25px;
    }

    span{
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }
    &:hover{
        background: #f25116;
    }
`