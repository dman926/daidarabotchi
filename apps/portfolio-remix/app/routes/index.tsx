import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';
import { server } from '~/config';

import { Resume } from '@daidarabotchi/portfolio-lib';

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  const response = await fetch(`${server}/assets/resume.json`);
  const data = await response.json();
  if (response.ok) {
    // https://remix.run/api/remix#json
    return json({...data, ok: true});
  } else {
    return json({ok: false})
  }
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();

  console.log(data);

  return (
    <div className="remix__page">
      <Resume />
    </div>
  );
}
