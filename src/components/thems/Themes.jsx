

import './style.css'
import useLocalStorage from './useLocalStorage'

export default function Themes() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleThemes(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div className="light-dark-mode" data-theme={theme} >
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleThemes} >Change Theme</button>
      </div>
    </div>
  )
}
