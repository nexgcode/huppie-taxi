export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { origins, destinations, mode = 'driving' } = body;
  const config = useRuntimeConfig();
  const apiKey = config.public.googleApiKey;

  if (!origins || !destinations) {
    throw createError({
      statusCode: 400,
      statusMessage: 'origins and destinations are required',
    });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origins)}&destinations=${encodeURIComponent(destinations)}&mode=${mode}&key=${apiKey}`;

    const response = await $fetch(url);
    return response;
  } catch (_error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error',
    });
  }
});
