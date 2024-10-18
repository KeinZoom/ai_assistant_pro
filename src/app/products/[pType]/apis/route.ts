import { getAnswer, ResType } from "@/apis/getAnswer";
import productIndex from "../../productIndex";

type JsonType = {
  input_text: string;
};

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: {
      pType: string;
    };
  }
) {
  const productKey = params.pType;

  try {
    const jsonBody: JsonType = await request.json();

    if (jsonBody && jsonBody.input_text) {
      const data: ResType = await getAnswer({
        inputText: jsonBody.input_text,
        path:
          productIndex.find((item) => item.pathName.startsWith(productKey))
            ?.remotePath || "",
        pKey:
          productIndex.find((item) => item.pathName.startsWith(productKey))
            ?.pKey || "",
      });
      return Response.json({ data: { answer: data.answer } });
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
