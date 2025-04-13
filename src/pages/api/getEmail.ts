import type { APIRoute } from 'astro';

export const prerender = false;

const { API_TOKEN } = import.meta.env;

export const POST: APIRoute = ({ params, request }) => {
  if (request.headers.get('api-token') === API_TOKEN) {
    return new Response(
      JSON.stringify({
        text: 'bradleyburgess@gmail.com',
        href: 'mailto:bradleyburgess@gmail.com',
      }),
    );
  }

  return new Response(null, {
    status: 403,
  });
};
