export async function POST(request: Request) {
  const data = await request.json();
  const text = data.text;

  const answer = "this is answer";

  return Response.json(answer);
}
