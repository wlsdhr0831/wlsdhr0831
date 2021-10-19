const size = {
  mobile: "770px",
  tabletS: "1023px",
  tabletM: "1220px",
  tabletL: "1280px",
  laptop: "1460px",
  desktop: "1700px",
};

const theme = {
  colorStart1: "#fbec9f",
  colorEnd1: "#fdb833",
  colorStart2: "#FEC3A6",
  colorEnd2: "#FF928B",
  colorStart3: "#a2d6f9",
  colorEnd3: "#1360e2",
  colorStart4: "#dec9e9",
  colorEnd4: "#9163cb",
  colorStart5: "#fafa00",
  colorEnd5: "#55a630",
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default theme;