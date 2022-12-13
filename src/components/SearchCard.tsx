/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState } from "react";
import { WindowLocation } from "@reach/router";
import { Card } from ".";
import { mq } from "../utils/mediaQueries";
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
      css={{
        width: "100%",
        maxWidth: "700px",
        margin: "-32px auto 0",
        borderRadius: "0",
        [mq.desktop]: {
          borderRadius: "8px",
        },
      }}
      {...props}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label
          css={{
            display: "block",
            marginBottom: "32px",
            fontSize: "1.4rem",
            fontWeight: 400,
            fontFamily: "var(--serif-font)",
          }}
          htmlFor="searchPosts"
        >
          Search posts
        </label>
        <input
          css={{
            height: "48px",
            width: "100%",
            padding: "4px 16px",
            display: "block",
            marginTop: "12px",
            background: "transparent",
            borderRadius: "16px",
            border: "1px var(--text-lighter) solid",
            lineHeight: "32px",
            color: "var(--text-light)",
            "&:focus": {
              border: "3px var(--primary) solid",
              outline: "none",
            },
          }}
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
