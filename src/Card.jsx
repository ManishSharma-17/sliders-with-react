import React from "react";
const Card = (props) => {
  let id = props.id;
  return (
    <article
      id={id}
      className="text-center overflow-hidden group bg-green-200 rounded-2xl"
    >
      <span className=" flex justify-center group-hover:bg-black">
        {props.icon}
      </span>
      <div className="overflow-hidden aspect-square max-h-[500px]">
        <img
          src={props.img}
          alt="card images"
          className="w-full h-full object-cover group-hover:scale-150 transition"
        />
      </div>
      <h2>{props.heading}</h2>
      <p
        className={`${id === 2 ? "text-red-700" : "unset"}`}
        dangerouslySetInnerHTML={{ __html: props.post }}
      ></p>
      <button>Read more...</button>
    </article>
  );
};

export default Card;
