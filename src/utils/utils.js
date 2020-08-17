export const LOCAL_STORAGE_ITEM_KEY = 'blogPosts';

export const formatTextToArray = text => {
  const splittedByParagraphs = text.split('\n');
  return splittedByParagraphs.filter(str => str.trim().length);
};

export const formatTextToString = text => text.join('\n');

export const getCurrentDate = () => new Date().toLocaleDateString();

export const getCurrentTime = () => new Date().toLocaleTimeString().slice(0, -3);

