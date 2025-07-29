import fontsData from "@/services/mockData/fonts.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getFonts = async () => {
  await delay(300);
  return [...fontsData];
};

export const getFontById = async (id) => {
  await delay(200);
  const font = fontsData.find(font => font.Id === parseInt(id));
  if (!font) {
    throw new Error("Font not found");
  }
  return { ...font };
};

export const getFontsByCategory = async (category) => {
  await delay(250);
  return [...fontsData.filter(font => font.category.toLowerCase() === category.toLowerCase())];
};

export const searchFonts = async (query) => {
  await delay(200);
  const searchTerm = query.toLowerCase();
  return [...fontsData.filter(font => 
    font.name.toLowerCase().includes(searchTerm) ||
    font.family.toLowerCase().includes(searchTerm) ||
    font.category.toLowerCase().includes(searchTerm)
  )];
};