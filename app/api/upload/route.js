// app/route.js*

import { Client, Storage } from "appwrite";

// export async function POST(request) {
//     const fileval = await request.formdata();
//     console.log("yo");
//     // const file = fileval.get('file');
//     // console.log(fileval.get('title'))

//     // if(!file)
//     //     return new Response(
//     //         JSON.stringify({ message: 'No file uploaded' }),
//     //         {
//     //             headers: {
//     //                 'content-type': 'application/json;charset=UTF-8',
//     //             },
//     //         },
//     //     );
//     // const bytes = await file.arrayBuffer();
//     // const buffer = Buffer.from(bytes);
//     return new Response(
//         JSON.stringify({ message: 'Hello world' }),
//         {
//             headers: {
//                 'content-type': 'application/json;charset=UTF-8',
//             },
//         },
//     );
// }

//   promise.then(function (response) {
//     console.log(response); // Success
//   }, function (error) {
//     console.log(error); // Failure
//   });

// //   // Return a 200 OK response to the client
// //   return new Response('File uploaded successfully!', {
// //     status: 200,
// //     headers: {
// //       'Content-Type': 'text/plain',
// //     },
// //   });

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const name = formData.get("name");

    // // Handle the file and name as needed (e.g., saving the file).
    // const bytes = await file.arrayBuffer();
    // const buffer = Buffer.from(bytes);

    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65464b855938b57408d1");

    const storage = new Storage(client);
    console.log(storage);
    const promise = storage.createFile(
      "65464c58911f486636cd",
      ID.unique(),
      file
    );
    console.log(promise);
    promise.then(
      function (response) {
        return new Response(
          JSON.stringify({ message: "File uploaded successfully" }),
          {
            headers: {
              "content-type": "application/json;charset=UTF-8",
            },
          }
        ); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  }
}
