"use server";

class CustomFetch {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request(endpoint: string) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url);
    return response;
  }
}

const fetchInstance = new CustomFetch("https://api.example.com");
console.log(fetchInstance);
export { CustomFetch };
