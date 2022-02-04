import headshot from '../images/Headshot2.jpg';


export default function Home(){
    return(
        <div className="min-h-screen bg-blue-100 p-12">
            <div className="grid place-items-center">
                <div className="text-6xl font-effect-emboss">Bryce Test Horman</div>
               
                <div><img class="image imageCircle" src={headshot}></img></div>
            </div>
        </div>
    )
}