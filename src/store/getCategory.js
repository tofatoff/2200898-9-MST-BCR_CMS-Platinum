const getCategory = (category, reverse) => {
  let peopleCap;

  if (!reverse) {
    switch (category?.toLowerCase()) {
      case "2 - 4 people":
        peopleCap = "small";
        break;
      case "4 - 6 people":
        peopleCap = "medium";
        break;
      case "6 - 8 people":
        peopleCap = "large";
        break;
    }
  } else {
    switch (category?.toLowerCase()) {
      case "small":
        peopleCap = "2 - 4 people";
        break;
      case "medium":
        peopleCap = "4 - 6 people";
        break;
      case "large":
        peopleCap = "6 - 8 people";
        break;
    }
  }

  return peopleCap;
};

export default getCategory;
