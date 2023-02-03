const http = require("https");
const url = "https://vinylqa.stonemor.com/rest/v1/CRM/location";

// module.exports.httpsCall = () => {
//   let ress;
//   const response = http.get(
//     url,
//     {
//       headers: {
//         Accept: "application/json",
//         "X-API-Key": "Jqh1JuD3wzk.2IA_CrYGBzoMz4fIT7Y0lA",
//         "Accept-Encoding": "gzip, deflate, br",
//         Connection: "keep-alive",
//       },
//     },
//     (res) => {
//       let rawData = "";

//       res.on("data", (chunk) => {
//         rawData += chunk;
//       });

//       res.on("end", () => {
//         const parsedData = JSON.parse(rawData);
//         //  return parsedData;
//         ress = parsedData;
//         console.log("ress : ", ress);
//       });
//     }
//   );
//   console.log("response : ", ress);
//   return response;
// };

async function httpsCall(route, query) {
  if (!query?.isActive) query["isActive"] = true;
  const url = "https://vinylqa.stonemor.com/rest/v1/CRM" + route;
  const objString = "?" + new URLSearchParams(query).toString();
  console.log("objString : " + objString);

  return new Promise((resolve) => {
    let data = "";

    http.get(
      url + objString,
      {
        headers: {
          Accept: "application/json",
          "X-API-Key": "Jqh1JuD3wzk.2IA_CrYGBzoMz4fIT7Y0lA",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      },
      (res) => {
        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          resolve(JSON.parse(data));
        });
      }
    );
  });
}

module.exports = {
  httpsCall,
};
