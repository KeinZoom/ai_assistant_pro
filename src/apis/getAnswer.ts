import request from "@/utils/http";

export type QueryConfig = {
  inputText: string;
  path: string;
  pKey: string;
};

export type ResType = {
  answer: string;
  created_at: number;
  envent: string;
  id: string;
  message_id: string;
  mode: string;
  task_id: string;
};

export async function getAnswer({
  inputText,
  path,
  pKey,
}: QueryConfig): Promise<ResType> {
  const body = {
    inputs: {
      input_text: inputText,
    },
    user: "keinn",
  };

  try {
    const res = await request.post(path, JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
        Authorization: pKey,
      },
    });
    if (res && res.data) {
      console.log(res);
      return res.data;
    }
    throw new Error("No response received.");
  } catch (error) {
    throw new Error(`Error in getAnswer: ${(error as Error).message}`);
  }
}
