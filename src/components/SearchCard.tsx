import React, { useState } from "react";
import { WindowLocation } from "@reach/router";
import { Card } from ".";
import { navigate } from "gatsby";

interface SearchCardProps {
  location: WindowLocation;
}
export const SearchCard = (props: SearchCardProps) => {
  const [input, setInput] = useState(() => {
    const searchParams = new URLSearchParams(props.location.search);
    return searchParams.get("s");
  });

  return (
    <Card
      className="mx-auto -mt-8 max-w-3xl rounded-none md:rounded-lg"
      {...props}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="mb-8 block font-serif text-2xl" htmlFor="searchPosts">
          Search posts
        </label>
        <input
          className="mt-3 block h-12 w-full rounded-2xl border border-text-lighter bg-transparent px-4 py-1 leading-8 text-text-light focus:border-4 focus:border-primary focus:outline-none"
          id="searchPosts"
          value={input ?? ""}
          onChange={(e) => {
            const newInput = e.currentTarget.value;
            setInput(newInput);
            navigate(`${props.location.pathname}?s=${newInput}`, {
              replace: true,
            });
          }}
        />
      </form>
    </Card>
  );
};
