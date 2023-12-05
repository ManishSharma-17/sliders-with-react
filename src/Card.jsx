import React from "react";
const Card = (props) => {
  return (
    <article className="text-center overflow-hidden group bg-green-200 rounded-2xl">
      <div className="overflow-hidden aspect-square max-h-[500px]">
        <img
          src={props.img}
          alt="an-athlete-makeing-flag-position-pexels-photo"
          className="w-full h-full object-cover group-hover:scale-150 transition"
        />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.post} </p>
      <button>Read more...</button>
    </article>
  );
};

export default Card;
