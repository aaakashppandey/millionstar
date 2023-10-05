import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <>
      <Carousel autoPlay>
        <div>
          <img src="assets/stock" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};
export default CarouselComponent;
