const transformDataToFront = (data) => {
  const firstGroup = data[0];
  const firstRegion = firstGroup[0].cities;

  const result = firstRegion.map(
    ({ description, code }) => `<li value="${code}">${description}</li>`
  );
  return result;
};

/**
 * loads and decorates the webcomponent
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const url =
    "https://www.iberia.com/cs/Satellite?pagename=IB_SE%2FCacheControl6h%2FBrowserCache3600%2FSeeker%2FCitiesStopOver&market=ES&locale=es&d=";
  let outputList = "";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    outputList = transformDataToFront(json);
  } catch (error) {
    console.error(error.message);
    outputList = error.message;
  }

  block.innerHTML = outputList.join(" ");

  console.log(block);
}
