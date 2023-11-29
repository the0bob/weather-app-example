'use client';
import Image from 'next/image'
import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getIcon(shortForecast: string) {
  if (!shortForecast) return;
  if (shortForecast.includes('Freezing')) return '/Freezing.svg';
  if (shortForecast.includes('Sunny') && shortForecast.includes('Rain')) return '/Blah.svg';
  if (shortForecast.includes('Cloudy')) return '/Blah.svg';
  if (shortForecast.includes('Rain')) return '/Typhoon.svg';
  if (shortForecast.includes('Hot')) return '/Hell.svg';
  return '/Sun.svg';
}

async function getData(searchText: string) {
  if (!searchText || searchText.length < 3) return;

  const geocodeResponse = await fetch(`https://geocode.xyz/${searchText}?json=1`);
  const {latt, longt } = await geocodeResponse.json();
  if (isNaN(latt) || isNaN(longt)) return;

  const gridpointResponse = await fetch(`https://api.weather.gov/points/${latt},${longt}`);
  const parsedGridpointResponse = await gridpointResponse.json();
  if (!parsedGridpointResponse?.properties) return;

  const { properties: { forecast: forcastEndpoint, relativeLocation: { properties: location } } } = parsedGridpointResponse;
  if (!forcastEndpoint) return;

  const forecastResponse = await fetch(forcastEndpoint);
  const parsedForecastResponse = await forecastResponse.json();
  if (!parsedForecastResponse) return;

  const { properties: forecast } = parsedForecastResponse;
  if (!forecast) return;

  return { forecast, location } as any;
}

export default function Home() {
  let timeout: NodeJS.Timeout;
  let signal: AbortSignal;
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResultData, setSearchResultData]: any = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateData = useCallback(debounce(async (incSearchText: string) => {
    setLoading(true);
    const data = await getData(incSearchText);
    if (data) {
      setSearchResultData(data);
    }
    setLoading(false);
  // throttle this request to allow for full use rinput and avoid hitting api limits
  }, 1200), []);

  async function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
    updateData(e.target.value);
  }

  const location = searchResultData?.location ? `${searchResultData?.location?.city}, ${searchResultData?.location?.state}` : '';
  const timeObj = searchResultData?.forecast?.updateTime && new Date(searchResultData?.forecast?.updateTime);
  const time = timeObj && `updated ${timeObj.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
  const today = searchResultData?.forecast?.periods[0];
  const iconPath = getIcon(today?.shortForecast)
  const dailyForecast = searchResultData?.forecast?.periods.filter((item: any) => {
    // TODO: use a better filter
    return item?.number % 2 === 0;
  }).slice(-6);

  return (
    <main className="container-fluid">
      <div className="header">
        <div className="header-label">
          My Weather
        </div>
        <div className="search-wrapper">
          <input className="search-input" value={searchText} onChange={handleSearchInput} type="text" placeholder="Enter Zipcode, City, or State" />
        </div>
      </div>
      <div className={loading ? 'content' : 'hidden'}> 
        Loading...
      </div>
      <div className={!today || loading ? 'hidden' : ''}>
        <div className="content">
          <div className="icon-wrapper">
            {iconPath && <Image
              src={iconPath}
              alt={today?.shortForecast}
              width={180}
              height={180}
              priority
            />}
          </div>
          <div className="current-wrapper">
            <div className="location">{location}</div>
            <div className="temp">{`${today?.temperature}`}&deg;</div>
            <div className="short-forecast">{today?.shortForecast}</div>
            <div className="update-time">{time}</div>
            <div className="detail-forecast">{today?.detailedForecast}</div>
          </div>
          {/* <div>
            <div>{tonight}</div>
          </div>
          <pre>{JSON.stringify(dailyForecast, null, 2)}</pre> */}
        </div>
        <div className="daily-forecast-label"> 
          Daily Forecast
        </div>
        <div className="daily-forecast-content"> 
          {dailyForecast?.map((item: any) => {
            const icon = getIcon(item?.shortForecast);
            const dateObj = item?.startTime && new Date(item?.startTime);
            const date = dateObj && `${DAYS[dateObj.getDay(dateObj)]}`;
            return (
              <div key={item.number} className="daily-forecast-item">
                {date}
                {icon && <Image
                  className="daily-forecast-icon"
                  src={icon}
                  alt={item?.shortForecast}
                  width={90}
                  height={90}
                  priority
                />}
                <div className="daily-forecast-temp">{`${item?.temperature}`}&deg;</div>
                {item?.shortForecast}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
