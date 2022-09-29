import React from "react";
import { Container, Subhead, NavLink} from "../ui";

const Card = ({ article }) => {
    return (
        <NavLink to={`/${article.attributes.slug}`}>
            <Subhead>{article.attributes.title}</Subhead>
        </NavLink>
    );
};

export default Card;