import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

const homePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p>Raef Estate is your ultimate destination for buying and renting houses, offering a seamless and user-friendly experience tailored to meet all your real estate needs. Whether you're searching for a cozy apartment in the city, a spacious family home in the suburbs, or a luxurious villa by the sea, HomeFinders has got you covered.</p>
            <SearchBar />
            <div className="boxes">
                <div className="box">
                    <h1>5+</h1>
                    <h2>Years of experience</h2>
                </div>
                <div className="box">
                    <h1>125</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>255+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default homePage