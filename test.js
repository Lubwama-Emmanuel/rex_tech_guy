import axios from "axios";

async function testEndpoint() {
  try {
    const response = await axios.get(
      "https://rex-tech-guy.onrender.com/api/v1/laptops/getLaptops",
      //   "http://127.0.0.1:9000/api/v1/laptops/getLaptops",
    );

    console.log(response.data.data);
  } catch (error) {
    console.log("An erorr occured", error);
  }
}

testEndpoint();
