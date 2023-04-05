const metaAndScriptCounter = () => {
  // Collects webpage HTML code
  let webpageHTML = document.documentElement.outerHTML;

  // Checks for meta tags matches
  let metaTagCount = webpageHTML.match(/<meta/g || []).length;

  // Checks for script tags that contain attributes
  let openScriptWithAttributesCount = webpageHTML.match(
    /<script /g || []
  ).length;

  // Checks for script tags that contain no attributes
  let openScriptWithoutAttributesCount = webpageHTML.match(
    /<script>/g || []
  ).length;

  // Checks for closing script tags
  let closedScriptCount = webpageHTML.match(/<\/script>/g || []).length;

  const totalScriptTagCount =
    openScriptWithAttributesCount +
    openScriptWithoutAttributesCount +
    closedScriptCount;

  const totalOpeningScriptTags =
    openScriptWithAttributesCount + openScriptWithoutAttributesCount;

  console.log(`The number of 'meta' tags in this web page is ${metaTagCount}`);

  console.log(
    `The total number of 'script' tags in this web page is ${totalScriptTagCount}. ${totalOpeningScriptTags} opening script tags and ${closedScriptCount} closing script tags.`
  );
};

metaAndScriptCounter();
