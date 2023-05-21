const getFakeOptions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      name: "Buenos Aires",
      country: "Argentina",
      url: "buenos-aires",
    },
    {
      name: "Buenos Aires",
      country: "Costa Rica",
      url: "buenos-aires",
    },
    {
      name: "Buenos Aires",
      country: "Mexico",
      url: "buenos-aires",
    },
    {
      name: "Buenos Aires",
      country: "Chile",
      url: "buenos-aires",
    },
    {
      name: "Buenos Aires",
      country: "Peru",
      url: "buenos-aires",
    },
  ];
};

export async function getOptions(searchTerm: string) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=4f234fbb57a943a1aa5184734231605&q=${searchTerm}`
  );
  const data = await response.json();
  // evita poner items con el mismo url
  return data.reduce((result: any[], item: any) => {
    const existingItem = result.find((i) => i.url === item.url);
    if (!existingItem) {
      result.push({
        name: item.name,
        country: item.country,
        url: item.url,
      });
    }
    return result;
  }, []);
}
