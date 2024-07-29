import { LinksFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";

import styles from "./styles.css?url";

import ContentfulDocument from "~/components/ContentfulDocument";
import { Stories } from "~/services/contentful";
import { Document } from "@contentful/rich-text-types";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export async function loader() {
  const storyList = await Stories.getAll();
  return json({
    storyList,
  });
}

export default function StoriesPage() {
  const { storyList } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Stories</h1>
      <ul className="library">
        {storyList.map((story: { sys: { id: Key | null | undefined; }; fields: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: Document | undefined; }; }) => (
          <li key={story.sys.id}>
            <Link to={`/stories/${story.sys.id}`} className="book">
              <h4>{story.fields.title}</h4>
              <ContentfulDocument document={story.fields.description} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
