import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


export default function Contact(){
    return(
        <div className="min-h-screen bg-black p-12">
            <div className="grid place-items-center">
                <div className="text-lg lg:text-6xl font-effect-emboss text-blue-500">brycehorman@gmail.com</div>
                <span className='socialMedia m-4'>
                    <a className='m-2' href="https://www.linkedin.com/in/bryce-horman/">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} className='text-white hover:text-blue-400' size="4x" />
                    </a>
                    <a className='m-2' href="https://github.com/brycehorman">
                        <FontAwesomeIcon icon={['fab', 'github']} className='text-white hover:text-blue-400' size="4x" />
                    </a>
                    <a className='m-2' href="https://medium.com/@brycehorman">
                        <FontAwesomeIcon icon={['fab', 'medium']} className='text-white hover:text-blue-400' size="4x" />
                    </a>
                </span>               
            </div>

        </div>
    )
}