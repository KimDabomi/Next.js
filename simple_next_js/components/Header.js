import styled from 'styled-components';
import Link from 'next/link';

const MenuLink = styled(Link)`
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;
    line-height: 40px;

    &:hover {
        color: #22b8cf;
    }

    &:after {
        content: "|";
        display: inline-block;
        padding: 0 7px;
        color: #ccc;
    }

    &:last-child {
        &:after {
            color: #fff;
        }
    }

    &.active {
        text-decoration: underline;
        color: #22b8cf;
        &:after {
            border-bottom: 4px solid #fff !important;
        }
    }
`;

const Header = () => {
    return (
        <div>
            <h1>Hello Next.js</h1>
            <hr />
            <nav>
                <MenuLink href='/'>Home</MenuLink>
                <MenuLink href='/hello?num1=100&num2=200'>Hello</MenuLink>
                <MenuLink href='/world?num1=100&num2=200'>World</MenuLink>
                <MenuLink href='/about/introduce'>소개글</MenuLink>
                <MenuLink href='/portfolio/publish'>퍼블리싱</MenuLink>
                <MenuLink href='/portfolio/frontend'>프론트엔드</MenuLink>
                <MenuLink href='/portfolio/backend'>백엔드</MenuLink>
            </nav>
        </div>
    )
};

export default Header;