import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <div>
      <ul className="grid sm:grid-cols-2 gap-6 mt-6">
        {drinks.map((drink) => (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
                  className="rounded-md object-cover"
                  alt={drink.strDrink}
                  //   placeholder="blur"
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinksList;
