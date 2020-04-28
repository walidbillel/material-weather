export const getForcast = async (unit, city) => {
  const res = await fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${city}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP,
      },
    }
  );
  const {
    weather,
    main: { temp, feels_like },
    name,
  } = await res.json();
  // const name = city,
  //   temp = 60,
  //   feels_like = 50,
  //   weather = [{ main: 'clear', description: `${unit} Clear is` }];
  return {
    name,
    temp,
    feels_like,
    main: weather[0].main,
    des: weather[0].description,
  };
};

export const fetchedLocation = async () => {
  const res = await fetch('http://ip-api.com/json');

  const { country, city, timezone } = await res.json();
  // const country = 'USA',
  //   city = 'New York',
  //   timezone = 'USA/E';

  return { country, city, timezone };
};
