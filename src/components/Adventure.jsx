import { FaArrowLeft, FaArrowRight, FaPlane } from "react-icons/fa"

export default function Adventure() {
    const Card = ({ image, city }) => {
        return (
            <div className="flex flex-col items-center gap-2 border-dashed border-t-0 w-52 p-4 relative">
                <div className="overflow-hidden relative">
                    <img src={image} alt="" className="w-full h-[200px] hoverImg" />
                </div>
                <p>{city}</p>
                <button className="rounded-full outline-none bg-primary text-white w-10 h-10 p-2 absolute top-0 left-0 -rotate-45">
                    <FaPlane />
                </button>
            </div>
        )
    }
  return (
    <div className="container mx-auto py-16">
        <section>
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl pb-4">Let&apos;s go on an adventure</h2>
                <p>Find and book a great experience</p>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center gap-4 pt-8 mx-auto">
                <Card city="PARIS" image="/paris.jpg" />
                <Card city="NEW YORK" image="/n-y.jpg" />
                <Card city="SEOUL" image="/seoul.jpg" />
                <Card city="BALI" image="/bali.jpg" />
            </div>
            <div className="flex justify-center py-10">
                <button className="rounded-full w-10 h-10 shadow flex justify-center items-center hover:text-white">
                    <FaArrowLeft />
                </button>
                <button className="rounded-full w-10 h-10 shadow flex justify-center items-center hover:text-white">
                    <FaArrowRight />
                    </button>
            </div>
        </section>

        <section className="py-16 px-6">
            <div className="lg:flex justify-between items-center pb-8">
                <h2 className="text-lg font-semibold">Book tickets and go now!</h2>
                <button className="bg-primary text-white px-4 py-2 lg:mt-0 mt-4 rounded-[10px] transition-bg hover:bg-white hover:text-primary shadow">Book now</button>
            </div>
            <div className="overflow-hidden rounded-2xl"> 
                <div className="w-full lg:h-[40rem] h-80 rounded-2xl">
                    <video loop controls muted autoPlay>
                        <source src="/vid.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    </div>
  )
}
