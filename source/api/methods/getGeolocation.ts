import fetch from "node-fetch";

interface IPinfo extends Object {
  lat: number;
  lon: number;
}

export default (ip: string): Promise<IPinfo> => {
  return new Promise(async (resolve, reject) => {
    try {
      let data: any = await fetch("http://ip-api.com/json/" + ip);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
