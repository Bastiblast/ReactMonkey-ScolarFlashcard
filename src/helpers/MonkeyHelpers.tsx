import { GM_xmlhttpRequest } from "$";

export default class Monkey {
  /**
   * Make http request using GM_xmlhttpRequest and update React hook.
   * @param url Full url.
   * @param setter useState Setter React hook.
   */
  FetchWrapper(
    url: string,
    setter: React.Dispatch<React.SetStateAction<JSPlaceholderArray>>,
  ) {
    GM_xmlhttpRequest({
      method: "GET",
      url: url,
      onload: function (response) {
        const json: JSPlaceholderArray = JSON.parse(response.responseText);
        console.log("FetchWrapper succed request.", json);
        setter(json);
      },
    });
  }
}
