import img2 from '../../../../public/images/img2.png.png';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                  {/**banner slice 1 */}
                 <div id="slide1" className="carousel-item relative w-full  flex flex-col  items-center">
                    <img src="../../../../public/images/img1.png.png" className="w-full h-[490px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">❮</a> 
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    {/**banner slice 2 */}
                  </div> 
                 <div id="slide2" className="carousel-item relative w-full flex flex-col  items-center">
                   <img src={img2} className="w-full h-[480px]" />
                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide1" className="btn btn-circle">❮</a> 
                     <a href="#slide1" className="btn btn-circle">❯</a>
                   </div>
                 </div>
                 
            </div>

        </div>
    );
};

export default Banner;