"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96 flex justify-center items-center">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute sm:mt-32  dark:bg-black bg-white sm:h-[195px] sm:w-[333px] sm:mx-auto sm:flex sm:flex-col sm:justify-center md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px]  rounded-3xl p-0 overflow-hidden md:mt-[8%] shadow-2xl border border-white dark:border-white/[0.1]  shadow-[#223c5e82] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
};
