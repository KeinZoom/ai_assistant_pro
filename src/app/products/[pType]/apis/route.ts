import { getAnswer, ResType } from "@/apis/getAnswer";

type JsonType = {
  input_text: string;
};

export async function POST(request: Request) {
  try {
    const jsonBody: JsonType = await request.json();
    if (jsonBody && jsonBody.input_text) {
      const data: ResType = await getAnswer({
        inputText: jsonBody.input_text,
        path: "/completion-messages",
      });

      return Response.json({ answer: data.answer });
    }
    return new Response(
      JSON.stringify({
        error_msg: 'Invalid parameters, "input_text" is missing.',
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error_msg: `Server errors, ${(error as Error).message}.`,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400,
      }
    );
  }
}
