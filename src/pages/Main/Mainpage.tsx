import Card from '../../components/Cards/Card'
import Chip from '../../components/Chip/Chip'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

function Mainpage() {
    return (
        <>
            <div className="transition duration-300 ease-in-out dark:bg-zinc-900">
                <Header />
                <Hero />
                <Chip />
                <Card />
                <Footer />
            </div>
        </>
    )
}

export default Mainpage