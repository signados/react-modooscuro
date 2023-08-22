import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';

import Otrocomponente from "./Otrocomponente";

export default function Linkedin() {
    const theme = useContext(ThemeContext);
    return (
        <>
            <a href="#" className={theme === "dark" ? "aux-dark-mode": ""}>
                <svg enable-background="new 0 0 128 128" height="38px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="38px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><circle cx="64" cy="64" fill="#0076B4" r="64"/></g><g><path d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z" fill="#FFFFFF"/></g></svg>
            </a>
            <Otrocomponente/>
        </>
    )
}