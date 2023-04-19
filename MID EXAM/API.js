import axios from 'axios';

const API = async () => {
  const DATA = [];
  let mensClothing = [];
  let jewelery = [];
  let electronics = [];
  let womensClothing = [];
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    response.data.map((item) => {
      if (item.category === "men's clothing") {
        mensClothing.push(item);
      } else if (item.category === 'jewelery') {
        jewelery.push(item);
      } else if (item.category === 'electronics') {
        electronics.push(item);
      } else if (item.category === "women's clothing") {
        womensClothing.push(item);
      }
    });
    // console.log('mensClothing: ', mensClothing);
    // console.log('jewelery: ', jewelery);
    // console.log('electronics: ', electronics);
    // console.log('womensClothing: ', womensClothing);

    DATA.push({ title: 'Men s clothing', data: mensClothing });
    DATA.push({ title: 'Jewelery', data: jewelery });
    DATA.push({ title: 'Electronics', data: electronics });
    DATA.push({ title: 'Women s clothing', data: womensClothing });

    // DATA = [
    //   { title: 'Jewelery', data: jewelery },
    //   { title: 'Electronics', data: electronics },
    //   { title: "Women's clothing", data: womensClothing },
    // ];

    return DATA;
  } catch (error) {
    return error;
  }
};

export default API;
