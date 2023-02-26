import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './homepage';
import Signup from './Signup';
import Login from './Login';


function Link() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                                        
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Link;