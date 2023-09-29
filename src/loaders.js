import axios from "axios";

// const baseUrl = `http://127.0.0.1:9000/api/v1`;
const productionBaseUrl = `https://rex-tech-guy.onrender.com`;

export async function allLaptops(brand = "all") {
  try {
    let filteredData;

    const res = await axios.get(
      `${productionBaseUrl}/api/v1/laptops/getLaptops`,
    );
    const data = res.data.data.laptops;

    if (brand === "all") {
      filteredData = data;
    } else {
      filteredData = data.filter((laptop) => laptop.brand === brand);
    }

    return filteredData;
  } catch (error) {
    console.log("AN ERROR OCCURED", error);
    return;
  }
}

export async function getLaptop(id) {
  try {
    const res = await axios.get(
      `${productionBaseUrl}/api/v1/laptops/getLaptop/${id}`,
    );

    const laptop = res.data.laptop;

    return laptop;
  } catch (error) {
    console.log(error);
    return;
  }
}
