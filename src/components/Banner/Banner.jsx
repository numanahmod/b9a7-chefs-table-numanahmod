import './Banner.css'

const Banner = () => {
    return (
        <div className='banner rounded-lg'>
            <h1 className="banner-title pt-12">Discover an exceptional cooking  <br/>
               class tailored for you!</h1> 
               <p className='banner-text'>Iranian kotlets are typically eaten for lunch or taken along on picnics, <br /> and are great hot or at room temperature.</p> 
               <div className='inline-flex justify-center gap-5'>
                <button className='btn1 ml-[400px] mt-8'>Explore Now</button>
                <button className='btn2 mt-8'>Our Feedback</button>
               </div>
        </div>
    );
};

export default Banner;