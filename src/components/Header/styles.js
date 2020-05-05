import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #025951;
    border-bottom: 5px solid #f25116;
    display: flex;
`
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;

    img{
        width: 100px;
        padding-left: 5px;
    }
`
export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a{
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #f25116;
        }
    }
    #notification{
        img {
            width: 25px;
        }
        span{
            background: #fff;
            color: #f25116;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }
        &:hover{
            opacity: 0.5;
        }
    }

    .divider::after{
        content: '|';
        margin: 0 10px;
        color: #fff;
    }
`