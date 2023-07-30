import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'

function MyRouter(){

    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
        </Routes>
    )
}

export default MyRouter;