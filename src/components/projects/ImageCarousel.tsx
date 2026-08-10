import
{
    useEffect,
    useState
}
from "react";

import
{
    ChevronLeft,
    ChevronRight
}
from "lucide-react";

type Props =
{
    images:string[];

    title:string;
};

const ImageCarousel = (
{
    images,
    title
}:Props) =>
{

    const
    [
        currentImage,
        setCurrentImage
    ] = useState(0);

    /* ==========================================================
       AUTO SLIDESHOW
    ========================================================== */

    useEffect(() =>
    {

        if(images.length <= 1)
        {
            return;
        }

        const interval = setInterval(() =>
        {

            setCurrentImage(previous =>

                previous === images.length - 1

                    ? 0

                    : previous + 1

            );

        },3500);

        return () => clearInterval(interval);

    },[images]);

    /* ==========================================================
       PREVIOUS
    ========================================================== */

    const previousImage = () =>
    {

        setCurrentImage(previous =>

            previous === 0

                ? images.length - 1

                : previous - 1

        );

    };

    /* ==========================================================
       NEXT
    ========================================================== */

    const nextImage = () =>
    {

        setCurrentImage(previous =>

            previous === images.length - 1

                ? 0

                : previous + 1

        );

    };

    return(

        <div className="image-carousel">

            {/* ==========================================================
               MAIN IMAGE
            ========================================================== */}

            <div className="carousel-preview">

                <img

                    src={images[currentImage]}

                    alt={`${title} ${currentImage+1}`}

                />

                {

                    images.length > 1 &&

                    <>

                        <button

                            type="button"

                            className="carousel-btn prev"

                            onClick={previousImage}

                        >

                            <ChevronLeft size={22}/>

                        </button>

                        <button

                            type="button"

                            className="carousel-btn next"

                            onClick={nextImage}

                        >

                            <ChevronRight size={22}/>

                        </button>

                        <div
                            className="carousel-indicator"
                        >

                            {currentImage+1} / {images.length}

                        </div>

                    </>

                }

            </div>

            {/* ==========================================================
               THUMBNAILS
            ========================================================== */}

            {

                images.length > 1 &&

                <div className="carousel-thumbnails">

                    {

                        images.map((image,index)=>

                            <button

                                key={index}

                                type="button"

                                className={
                                    currentImage===index

                                    ? "thumbnail active"

                                    : "thumbnail"
                                }

                                onClick={()=>setCurrentImage(index)}

                            >

                                <img

                                    src={image}

                                    alt={`${title} ${index+1}`}

                                />

                            </button>

                        )

                    }

                </div>

            }

        </div>

    );

};

export default ImageCarousel;