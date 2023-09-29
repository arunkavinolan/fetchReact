import React from "react";
import comic_1 from './comic_home.jpg'

function Home(){
    return (
        <div style={{marginTop:"130px"}}>

            <div className="row">

                <div className="col-sm-6">
                   <img  src={comic_1} alt="comic_intro" style={{width:"100%", height:"800px"}}/>
                </div> 

                <div className="col-sm-6">
                     <h3 style={{textAlign:"center"}}>Comic Experience</h3>
                     <p>
                         Welcome to our comic store, the ultimate destination for all Marvel and DC comic enthusiasts!
                          Step into a world of superheroes and supervillains as we offer a vast and diverse collection of comics from both iconic universes.
                          Whether you're a die-hard fan or just starting your comic journey, our store is your haven for exploration and adventure.
                     </p>
                     <p>
                       Immerse yourself in the captivating stories and breathtaking artwork that have defined generations. 
                       From the timeless classics to the latest releases.
                       we've got it all. Dive into the thrilling tales of Spider-Man, Iron Man, Batman, Superman, Wonder Woman, and many more legendary characters.
                    </p>
                    <p>
                    Our store provides a welcoming atmosphere where you can browse, read, and discover the incredible narratives that have shaped the comic book industry. 
                    Relax in our comfortable reading corners with your favorite comic in hand, or explore our wide selection of collectibles and merchandise.
                    At our comic store, we cater to all ages and interests, ensuring there's something for everyone. 
                    Whether you're seeking the nostalgia of vintage comics or the excitement of modern story arcs, our dedicated staff is here to assist you in finding your next comic book adventure.
                   Join us at our comic store, where the worlds of Marvel and DC come to life, and where every page turn reveals a new and thrilling chapter in the ever-expanding universe of comics.
                    It's more than a store; it's an invitation to explore, dream, and celebrate the extraordinary world of superheroes.
                    </p>







                </div>

            </div>
        </div>
    )
} 

export default Home;