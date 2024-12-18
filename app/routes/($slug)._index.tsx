import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
} from "@builder.io/sdk-react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { fetch as webFetch } from "@remix-run/web-fetch";
import { CUSTOM_COMPONENTS } from "../builder-registry";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const builderApiKey = process.env.PUBLIC_BUILDER_KEY!;
  const url = new URL(request.url);
  const urlPath = `/${params["slug"] || ""}`;

  const page = await fetchOneEntry({
    model: "page",
    apiKey: builderApiKey,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: { urlPath },
    fetch: webFetch,
  });


  if (!page && !isPreviewing(url.search)) {
    throw new Response("Page Not Found", {
      status: 404,
      statusText: "Page not found in Builder.io",
    });
  }

  return { page, builderApiKey };
};

// Define and render the page.
export default function Page() {
  const { page, builderApiKey } = useLoaderData<typeof loader>();
  const PrefetchLink = (props: any) => {
    return <Link {...props} to={props.href || "/"} prefetch="intent" />;
  };
  // Render the page content from Builder.io
  return (
    <>
      <Header />
      <Content
        model="page"
        apiKey={builderApiKey}
        content={page}
        customComponents={CUSTOM_COMPONENTS}
        linkComponent={PrefetchLink}
      />
      <Footer />
    </>
  );
}
