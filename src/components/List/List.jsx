import React from "react";
import { Trans, Plural, DateFormat } from '@lingui/macro';
import "./List.css";

const List = ({ content }) => {
  const { name, date, value } = content;
  return (
    <div className="list-container container">
      <h1 className="heading">
        <Trans>List of Things to Remember</Trans>
      </h1>
      <ol>
        <li>
          <Trans>Today's date -</Trans>&nbsp;
          <DateFormat
            value={date}
            format={{
              year: "numeric",
              month: "long",
              day: "numeric"
            }}
          />
        </li>
        <li>
          <Trans>Friend's name - {name}</Trans>
        </li>
        <li>
          <Trans>The weather is <b>hot</b>.</Trans>
        </li>
        <li>
          <Plural value={value}
            _0="No books on the table."
            one="# book on the table."
            other="# books on the table."
          />
        </li>
        <li>
          <Trans>Visit a <a href="https://www.google.com/">site</a>.</Trans>
        </li>
      </ol>
    </div>  
  );
};

export default List;