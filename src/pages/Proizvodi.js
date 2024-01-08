import KartaArtikla from "../components/KartaArtikla";
import sajt1 from "../images/sajt1.jpg";
import sajt2 from "../images/sajt2.jpg";
import sajt3 from "../images/sajt3.jpg";

function Proizovid() {
  return (
    <>
      <div className="h-96 bg-orange-100 ">
        <div className="flex justify-center gap-6 mt-12 ">
          <KartaArtikla
            img={sajt1}
            title="Malina Med"
            about="Med sa Liofiliziranom Malinom"
            price="12KM"
          />
          <KartaArtikla
            img={sajt2}
            title="Jaogda Med"
            about="Med sa Liofiliziranom Jagodom"
            price="12KM"
          />
          <KartaArtikla
            img={sajt3}
            title="Borovnica Med"
            about="Med sa Liofiliziranom Borovnicom"
            price="12KM"
          />
        </div>
      </div>
      <div className="flex justify-center mt-9 h-16">
        <p>Ovo je Text za Probu</p>
      </div>
      <div className="h-96 bg-orange-100 ">
        <div className="flex justify-center gap-6 mt-12 ">
          <KartaArtikla
            img={sajt1}
            title="Malina Med"
            about="Med sa Liofiliziranom Malinom"
            price="12KM"
          />
          <KartaArtikla
            img={sajt2}
            title="Jaogda Med"
            about="Med sa Liofiliziranom Jagodom"
            price="12KM"
          />
          <KartaArtikla
            img={sajt3}
            title="Borovnica Med"
            about="Med sa Liofiliziranom Borovnicom"
            price="12KM"
          />
        </div>
      </div>
    </>
  );
}

export default Proizovid;
