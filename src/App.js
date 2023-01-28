import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import isbot from 'isbot'

const Root = styled.div``

const Header = styled.header`
    padding: var(--padding-vertical) var(--padding-horizontal);
    background: var(--brand);
    color: var(--white);
`

const Title = styled.h1``

const Content = styled.div`
    padding: var(--padding-vertical) var(--padding-horizontal);
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--off-white);
    padding: var(--padding-vertical) var(--padding-horizontal);
    border-radius: 0.5em;
    color: var(--dark-not-black);
`

Card.Title = styled.h2``

Card.Content = styled.div``

const Form = styled.form``

const Button = styled('button')(
    {
        cursor: 'pointer',
        fontWeight: 500,
        padding: 'var(--padding-vertical) var(--padding-horizontal)',
        borderRadius: '0.5em',
    },
    variant({
        variants: {
            primary: {
                backgroundColor: 'var(--brand)',
                color: 'var(--white)',
                '&:hover': {
                    backgroundColor: 'var(--text-link)',
                    transitionDuration: '0.3s',
                },
            },
            secondary: {
                backgroundColor: 'var(--not-quite-black)',
                color: 'var(--white)',
                '&:hover': {
                    backgroundColor: 'var(--dark-not-black)',
                    color: 'var(--greyple)',
                    transitionDuration: '0.3s',
                },
            },
        },
    })
)

function App() {
    console.log('isbot: ', isbot(navigator.userAgent))
    return (
        <Root>
            <Header>
                <Title>Header</Title>
            </Header>
            <Content>
                <Card>
                    <Card.Title>title</Card.Title>
                    <Card.Content>
                        <Button variant="primary">button</Button>
                        <Button variant="secondary">button</Button>
                    </Card.Content>
                </Card>
            </Content>
        </Root>
    )
}

export default App
