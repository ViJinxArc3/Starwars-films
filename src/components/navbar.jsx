
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Image src='/images/logo2.png' className="navbar-logo" width={180} height={180} alt="starwars-logo" />
            </div>
            <div className="character-list">
            <a className="character-item">
            <Image src='/images/r2d2.png' width={100} height={100} alt="starwars-logo" />
            <p>R2-D2</p>
            </a>
            <a className="character-item">
            <Image src='/images/c3po.png' className="character-item" width={100} height={100} alt="starwars-logo" />
            <p>C-3PO</p>
            </a>
            <a className="character-item">
            <Image src='/images/yoda.png' className="character-item" width={100} height={100} alt="starwars-logo" />
            <p>YODA</p>
            </a>
            <a className="character-item">
            <Image src='/images/mandelorian.png' className="character-item" width={100} height={100} alt="starwars-logo" />
            <p>MANDALORIAN</p>
            </a>
          
            </div>
        
        </div>
      
    )
}

export default Navbar;