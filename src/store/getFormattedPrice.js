const getFormattedPrice = (price) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);

  return formattedPrice;
};

export default getFormattedPrice;
