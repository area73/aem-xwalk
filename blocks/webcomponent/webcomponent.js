const transformDataToFront = (data) => {
  const firstGroup = data[0];
  const firstRegion = firstGroup[0].cities;

  const result = firstRegion.map(
    ({ description, code }) => `<li value="${code}">${description}</li>`
  );
  console.log("result== ", result);
  return result;
};

const patternFlyEl = `
<script type="module" src="https://esm.sh/@patternfly/elements/pf-card/pf-card.js"></script>

<pf-card border>
  <h2 slot="header">Card component</h2>
  <p>PatternFly Elements are custom HTML elements that work everywhere.
    The Card element has <code>header</code> and <code>footer</code> slots for things like
    titles and actions.
  </p>
  <a class="cta" slot="footer" href="components/card">More about <code>pf-card</code></a>
</pf-card>
`;

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

  console.log(outputList);
  block.innerHTML = patternFlyEl;

  console.log(block);
}
