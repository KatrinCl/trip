import { HiLocationMarker } from "react-icons/hi"

export default function Popular() {
    const Card = ({ image, text, location }) => {
        return(
        <div>
            <div className="overflow-hidden relative my-0 mx-auto rounded-2xl">
                <img src={image} alt=""
                    className="rounded-2xl w-[300px] h-[300px] box-border hoverImg" />
                <p className="bg-white rounded-lg p-1 text-sm absolute top-4 right-4">20% off</p>
            </div>
            <div>
                <h5 className="text-xl pt-2 font-semibold">{text}</h5>
                <div className="flex items-center gap-2 py-3">
                    <HiLocationMarker size={20} className="text-primary" />
                    <p className="text-gray text-light">{location}</p>
                </div>
            </div>
        </div>
    )}
    return (
        <div className="container mx-auto px-3">
            <section className="pt-16">
                <div>
                    <div className="lg:flex justify-between text-center">
                        <span>
                            <h2 className="text-4xl">Popular Place</h2>
                            <p className="py-4">Let&apos;s enjoy this heaven on earth</p>
                        </span>
                        <p className="text-light lg:w-2/5">
                            Many places are very famous, beautiful, clean, and will give a very deep impression to visitors and make them come back.
                        </p>
                    </div>

                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
                        <Card image="/mountain.jpg"
                            location="Kirkjufell, Island"
                            text="SC, Kirkjufell" />

                        <Card image="/maldives.jpg"
                            location="Maldives, Maldives"
                            text="Maldives" />

                        <Card image="/fall.jpg"
                            location="Chily, Central America"
                            text="CA, Chily" />

                        <Card image="/view.jpg"
                            location="OIA, Dubai"
                            text="Dubai" />

                    </div>
                </div>
            </section>

            <section className="py-16">
                <span className="flex flex-col items-center text-center gap-2">
                    <h2 className="text-4xl font-bold">Travel to make sweet memories</h2>
                    <p>Find trips that fit a flexible lifestyle</p>
                </span>
                <div className="lg:flex items-center justify-between py-16">
                    <div className="lg:w-1/2">
                            <div>
                                <span className="bg-[#7bbbde] text-white px-3 py-1 rounded-xl">01</span>
                                <h2 className="font-bold text-lg py-4">Find trips that fit your freedom</h2>
                                <p className="text-light pb-6 lg:w-1/2">
                                    Traveling offers freedom and flexibility, solitude and spontaneity, and privacy and purpose.
                                </p>
                            </div>
                            <div>
                                <span className="bg-[#8196e9] text-white px-3 py-1 rounded-xl">02</span>
                                <h2 className="font-bold text-lg py-4">Get back to nature by travel</h2>
                                <p className="text-light pb-6 lg:w-1/2">
                                    The world is a playground and you can finally explore Mother Nature&apos;s inimitable canvas.
                                </p>
                            </div>
                            <div>
                                <span className="bg-primary text-white px-3 py-1 rounded-xl">03</span>
                                <h2 className="font-bold text-lg py-4">Reignite those travel tastebuds</h2>
                                <p className="text-light pb-6 lg:w-1/2">
                                    There are infinite reasons to love travel, one of them being the food, glorious food.
                                </p>
                            </div>
                            <button className="bg-primary text-white px-6 py-3 transition-bg hover:bg-white hover:text-primary rounded-xl shadow my-8">
                                Start your explore
                                </button>
                        </div>

                        <div className="lg:w-1/2 h-full overflow-hidden rounded-2xl">
                            <img src="/stone.jpg" alt="" className="rounded-2xl w-full h-full hoverImg" />
                        </div>
                    </div>
            </section>
        </div>
    )
}
