export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { input } = body as { input: string };
  const config = useRuntimeConfig();
  const apiKey = config.public.googleApiKey;

  if (!input) {
    throw createError({
      statusCode: 400,
      statusMessage: 'input is required',
    });
  }

  try {
    const requestBody = {
      input,
      includedRegionCodes: ['nl', 'de', 'be', 'lu', 'fr'],
      locationBias: {
        circle: {
          center: {
            latitude: 52.0907,
            longitude: 5.1214,
          },
          radius: 50000,
        },
      },
    };

    const response = await $fetch('https://places.googleapis.com/v1/places:autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'suggestions.placePrediction.text.text',
      },
      body: JSON.stringify(requestBody),
    });

    return response;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error;
  }
});
