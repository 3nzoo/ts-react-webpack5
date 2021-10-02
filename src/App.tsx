import './styles.css'
import IMAGE from './funny.png'
import LOGO from './monkey-emojis-6.svg'

export const App = () => {
    return <>
    <h1> React Typescript Webpack Template - {process.env.NODE_ENV} {process.env.name}</h1>
    <img src={IMAGE} alt="funny pic" width='300' height='300' />
    <img src={LOGO} alt="monkey" width='200' height='200' />
    </>
}