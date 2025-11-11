export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { message, title } = body;

    if (!message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message is required',
      });
    }

    const config = useRuntimeConfig();
    const botToken = config.telegramBotToken;
    const chatId = config.telegramChatId;

    if (!botToken || !chatId) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Telegram configuration is missing',
      });
    }

    const formattedMessage = title ? `${title}\n\n${message}` : message;

    const response = await $fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          chat_id: chatId,
          text: formattedMessage,
          parse_mode: 'HTML',
        },
      },
    );

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error('Error sending Telegram message:', error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message',
    });
  }
});
