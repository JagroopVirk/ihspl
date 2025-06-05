// src/components/GlobalFootprint.jsx
import { useState } from 'react';
import worldMap from '../../assets/world_map2.svg';
// import Picture from 'astro/components/Picture.astro';

function latLngToPercent(lat, lng) {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { top: `${((90 - lat) / 180) * 100}%`, left: `${x}%` };
}

const rawLocations = [
  {
    name: 'India',
    lat: 28.6139,
    lng: 77.209,
    city: 'Mohali, Punjab',
    address: 'Taj Plaza, TDI City, Sector-118',
  },
  {
    name: 'UAE',
    lat: 25.276987,
    lng: 55.296249,
    city: 'Dubai',
    address: 'Saleh Bin Lahej 341, Al Barsha 1',
  },
  {
    name: 'USA',
    lat: 42.4806,
    lng: -83.4755,
    city: 'Novi, MI',
    address: '23950 Mondavi Drive',
  },
  {
    name: 'UK',
    lat: 51.5217,
    lng: -0.7192,
    city: 'Berkshire',
    address: '16 Bissley Drive, Maidenhead',
  },
  {
    name: 'Canada',
    lat: 43.7315,
    lng: -79.7624,
    city: 'Brampton, ON',
    address: '2 County Court Blvd',
  },
  {
    name: 'Egypt',
    lat: 30.1122,
    lng: 31.3469,
    city: 'Cairo',
    address: '5 El Nasr St, Sheraton Heliopolis',
  },
];

const locations = rawLocations.map((loc, index) => ({
  ...loc,
  ...latLngToPercent(loc.lat, loc.lng),
  id: index,
}));

export default function GlobalFootprint() {
  const [openId, setOpenId] = useState(null);

  return (
    <section class="overflow-hidden bg-[#f0fdfa] py-16">
      <div class="mx-auto max-w-6xl px-4 text-center">
        <h2 class="mb-4 text-3xl font-bold text-[#01a69e]">Our Global Footprint</h2>
        <p class="mx-auto mb-10 max-w-2xl text-gray-600">Offices and operations in key regions across the world.</p>

        <div class="relative mx-auto aspect-[2/1] w-full max-w-5xl">
          <img src={worldMap} alt="World Map" class="absolute inset-0 z-0 h-full w-full object-contain" />
          {/* <Picture src={worldMap} alt="World map" class="absolute inset-0 z-0 h-full w-full object-contain" /> */}

          {locations.map((loc) => (
            <button
              key={loc.id}
              type="button"
              class="absolute z-10 -translate-x-1/2 -translate-y-1/2 transform"
              title={loc.name}
              style={{ top: loc.top, left: loc.left }}
              onClick={() => setOpenId(loc.id)}
            >
              <span class="absolute h-full w-full animate-ping rounded-full bg-[#f5690c] opacity-75"></span>
              <span class="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-[#f5690c] shadow-md"></span>
            </button>
          ))}
        </div>
      </div>

      {locations.map(
        (loc) =>
          openId === loc.id && (
            <div
              key={`modal-${loc.id}`}
              class="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black"
              onClick={() => setOpenId(null)}
            >
              <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <div class="mb-4 flex items-center justify-between">
                  <h3 class="text-xl font-semibold text-[#01a69e]">{loc.name}</h3>
                  <button onClick={() => setOpenId(null)} class="text-xl font-bold text-gray-500 hover:text-red-500">
                    &times;
                  </button>
                </div>
                <p class="text-sm font-semibold text-gray-700">{loc.city}</p>
                <p class="text-sm text-gray-600">{loc.address}</p>
              </div>
            </div>
          ),
      )}
    </section>
  );
}
