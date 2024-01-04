import CounterButton from "./CounterButton";
import BuyButton from "./BuyButton";
function KartaArtikla({ title, about, price, img }) {
  return (
    <div className="border border-black border rounded-md p-4 w-48 h-86 bg-gray-50">
      <img src={img} alt={title} className="w-full mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm mb-2">{about}</p>
      <p className="text-sm font-bold mb-2">{price}</p>
      <CounterButton />
    </div>
  );
}

export default KartaArtikla;
