import headshot from '../images/Headshot2.jpg';



export default function Home(){
    return(
        <div className="min-h-screen bg-black p-12">
            <div className="grid w-full place-items-center">
                <div className="text-3xl lg:text-6xl text-blue-500">Bryce Horman</div>
               
                <div><img class="h-3/6 lg:h-screen image imageCircle" src={headshot}></img></div>
            </div>
        </div>
    )
}